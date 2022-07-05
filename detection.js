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
const isMobileSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

// detect OS
const isAndroid = UA && UA.indexOf("android") > 0;
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

// detect device
const isMac = window.navigator.platform.toLowerCase().includes("mac");
const isWindows = window.navigator.platform.toLowerCase().includes("win");

// detect webview
let isAndroidWebView = /(Version\/\d+.*\/\d+.0.0.0 Mobile|; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(navigator.userAgent);
let isIosWebView = false;
safari = /safari/.test( UA ), ios = /iphone|ipod|ipad/.test( UA );
if( ios && !safari ) isIOSWebView = true;

// detect if touch device
let isTouchDevice = false;
let isMobile = window.matchMedia;
if (isMobile) {
  let match_mobile = isMobile("(pointer:coarse)");
  isTouchDevice = match_mobile.matches;
}

// detect MetaMask
const isMetaMask = ethereum.isMetaMask === true;

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
    },
    "webView": {
      isAndroidWebView: isAndroidWebView,
      isIosWebView: isIosWebView
    },
    "touchDevice": {
      isTouchDevice: isTouchDevice 
    }
    "walletBrowserAndroid": {
      isMetaMask: (isTouchDevice && isMetaMask && isChrome && isAndroid), 
      isAlphaWallet: (isChrome && isAndroid && isMobileSafari && mobileTestOutput && isAndroidWebView),
      isMyEthereumWallet: (isChrome && isAndroid && isMobileSafari && isTouchDevice && isAndroidWebView),
      isImToken: (isChrome && isAndroid && isMobileSafari&& isTouchDevice)
    },
    "walletBrowserIos": {
      isMetaMask: (isMetaMask && isIosWebView),
      isAlphaWallet: (isChrome && isMobileSafari && isTouchDevice && isIosWebView),
      isMyEthereumWallet: (isChrome && isMobileSafari && isTouchDevice && isIosWebView),
      isImToken: (isChrome && isMobileSafari && isTouchDevice && isIosWebView)
    },
  }
}
