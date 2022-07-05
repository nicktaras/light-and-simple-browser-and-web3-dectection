const inBrowser = typeof window !== "undefined";
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
const isWindows = window.navigator.platform.toLowerCase().includes("win");

// detect webview
const isWebView = /(Version\/\d+.*\/\d+.0.0.0 Mobile|; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(navigator.userAgent);

// detect if touch device
let isTouchDevice = false;
let isMobile = window.matchMedia;
if (isMobile) {
  let match_mobile = isMobile("(pointer:coarse)");
  isTouchDevice = match_mobile.matches;
}

// detect wallet
if(typeof ethereum === 'undefined') var ethereum:any = {};
const isMetaMask = (isTouchDevice && ethereum.isMetaMask);
const isAlphaWallet = (isTouchDevice && ethereum.isAlphaWallet);
const isTrust = (isTouchDevice && ethereum.isTrust);
const isStatusWallet = (isTouchDevice && ethereum.isStatusWallet);
const isGoWallet = (isTouchDevice && ethereum.isGoWallet);
const isMyEthereumWallet = (isTouchDevice && ethereum.isTrust && ethereum.isMetaMask);

export const getBrowserData = () => {
  return {
    "browser": {
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
    },
    "webView": {
      isWebView
    },
    "touchDevice": {
      isTouchDevice: isTouchDevice 
    },
    "walletBrowser": {
      isMetaMask,
      isAlphaWallet,
      isMyEthereumWallet,
      isTrust,
      isGoWallet,
      isStatusWallet,
    }
  }
}
