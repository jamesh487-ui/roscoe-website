const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID

let analyticsLoaded = false
let metaPixelLoaded = false

export function hasAnalyticsConfig() {
  return Boolean(GA_MEASUREMENT_ID || META_PIXEL_ID)
}

export function loadGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || analyticsLoaded || typeof window === "undefined") {
    return
  }

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag("js", new Date())
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
  })

  analyticsLoaded = true
}

export function loadMetaPixel() {
  if (!META_PIXEL_ID || metaPixelLoaded || typeof window === "undefined") {
    return
  }

  window.fbq =
    window.fbq ||
    function fbq() {
      window.fbq.callMethod
        ? window.fbq.callMethod.apply(window.fbq, arguments)
        : window.fbq.queue.push(arguments)
    }

  if (!window._fbq) {
    window._fbq = window.fbq
  }

  window.fbq.push = window.fbq
  window.fbq.loaded = true
  window.fbq.version = "2.0"
  window.fbq.queue = window.fbq.queue || []

  const script = document.createElement("script")
  script.async = true
  script.src = "https://connect.facebook.net/en_US/fbevents.js"
  document.head.appendChild(script)

  window.fbq("init", META_PIXEL_ID)
  metaPixelLoaded = true
}

export function trackPageView(path) {
  if (GA_MEASUREMENT_ID && analyticsLoaded && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    })
  }

  if (META_PIXEL_ID && metaPixelLoaded && typeof window.fbq === "function") {
    window.fbq("track", "PageView")
  }
}
