// 
const inBrowser = typeof window !== "undefined";

// get user agent
const UA = inBrowser && window.navigator.userAgent.toLowerCase();

// detect browser
const isIE = UA && /msie|trident/.test(UA);
const isIE9 = UA && UA.indexOf("msie 9.0") > 0;
const isEdge = UA && UA.indexOf("edge/") > 0;
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
const isPhantomJS = UA && /phantomjs/.test(UA);
const isFF = UA && UA.match(/firefox\/(\d+)/);
const isSafari = window.safari ? true : false;

// detect OS
const isAndroid = UA && UA.indexOf("android") > 0;
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

// detect device
const isMac = window.navigator.platform.toLowerCase().includes("mac");
const isWindows = window.navigator.platform.toLowerCase().includes("windows");

export const getDeviceBools = () => {
  return {
    "browser": 
      "isIE": isIE,
      "isIE9": isIE9,
      "isEdge": isEdge,
      "isChrome": isChrome,
      "isPhantomJS": isPhantomJS,
      "isFF": isFF,
      "isSafari": isSafari
    },
    "mobile": {
      "isAndroid": isAndroid,
      "isIOS": isIOS   
    },
    "device": {
      "isMac": isMac,
      "isWindows": isWindows
    }
  }
}
