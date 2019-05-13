import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Counter} from '../common/counter';

function isBackgroundConnectable() {
  const port = chrome.runtime.connect();
  if (port) {
    port.disconnect();
    return true;
  }
  return false;
}

// This sends event to the background page
// where it can be relayed to the inspected page
function sendEventToBackgroundPage(message) {
  // if (!isBackgroundConnectable()) {
  //   console.error('Chrome extension has been reloaded. Please refresh the page');
  //   return;
  // }
  try {
    message.tabId = chrome.devtools.inspectedWindow.tabId;
    chrome.runtime.sendMessage(message);
  } catch (e) {
    if (
      e.message.match(/Invocation of form runtime\.connect/) &&
      e.message.match(/doesn't match definition runtime\.connect/)
    ) {
      console.error('Chrome extension has been reloaded. Please refresh the page');
    } else {
      throw(e);
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counters: Map<String , number>;

  constructor(private cdr: ChangeDetectorRef) {
    this.counters = new Map();

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      request.data.forEach((counter) => {
        this.counters.set(counter.name , counter.value);
      });
      this.cdr.detectChanges();
      return true;
    });
  }

  ngOnInit() {
  }

  startProfiler() {
    console.log('send event from extension to start profiling');
    sendEventToBackgroundPage({action: 'startProfiling'});
  }
}

