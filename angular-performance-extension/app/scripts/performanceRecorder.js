function trackComponents(appRef, ngZone) {
    ngZone.runOutsideAngular(function () {
        setInterval(function () {
            let stats = {
                componentCount: 0,
                bindingCount: 0,
            };
            scanNodes(appRef["_views"]["0"]._view.nodes, stats);

            let event = new CustomEvent("profile-data", {detail : [
                {name: "components", value: stats.componentCount},
                {name: "binding", value: stats.bindingCount},
            ] });

            // document.dispatchEvent(event);
        });
    });
}


function trackChangeDetection(appRef, ngZone) {
    let totalTick = 0;
    let countTick = 0;
    let originalTick = appRef.tick;
    appRef.tick = function () {
        let before = performance.now();
        originalTick.apply(this, arguments);
        let after = performance.now();
        let duration = (after - before);
        totalTick += duration;
        ++countTick;
        let avg = totalTick / countTick;
        ngZone.runOutsideAngular(function () {
            let event = new CustomEvent("profile-data",  {
                detail: [
                    { name: "cd (avg)", value: avg },
                    { name: "cd (last)", value: duration },
                    { name: "cd (count)", value: countTick },
                ]});
            // document.dispatchEvent(event);
        });
    };
}


function scanNodes(nodes, stats) {
    for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        if (node.componentView && nodes[i + 1].instance) {
            ++stats.componentCount;
            if (node.componentView.def.bindingCount > 0) {
                stats.bindingCount += node.componentView.def.bindingCount;
            }
            scanNodes(node.componentView.nodes, stats);
        }
        if (node.viewContainer && nodes[i + 1].instance) {
            for (let _i = 0, _a = node.viewContainer._embeddedViews; _i < _a.length; _i++) {
                let embeddedView = _a[_i];
                if (embeddedView.def.bindingCount > 0) {
                    stats.bindingCount += embeddedView.def.bindingCount;
                }
                scanNodes(embeddedView.nodes, stats);
            }
        }
    }
}


console.log("performanceRecorder.js loaded !!!");

let appRef = ng.probe(getAllAngularRootElements()[0]).injector.get(ng.coreTokens.ApplicationRef);

trackComponents(appRef ,appRef._zone);
trackChangeDetection(appRef ,appRef._zone);


setInterval(()=> {
  let response = {
    data : [
      {name: "components", value: 4},
      {name: "binding", value: 5}
    ]
  };
  let event = new CustomEvent("profile-data", {detail : response.data});

  document.dispatchEvent(event);
},1000);


