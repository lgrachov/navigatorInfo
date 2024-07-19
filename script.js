const doc = document.getElementByTagName("body")[0]
const names = ["User agent", "Preferred language", "App codename", "App name", "App version", "Product name", "Cookies enabled (or supported)", "Platform (operating system)", "Max touch points"]
const keys = ["userAgent", "language", "appCodeName", "appName", "appVersion", "product", "cookieEnabled", "platform", "maxTouchPoints"]

doc.innerHTML = keys.map((key, i) => {
    return `${names[i]}: ${window.navigator[key] || 'N/A'}`;
}).join('<br/>');