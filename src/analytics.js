const trackingId = 'G-CWSLFLSFP4'

window.dataLayer = window.dataLayer || []
window.gtag = function gtag() {
  window.dataLayer.push(arguments)
}

if (import.meta.env.PROD) {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
  document.head.appendChild(script)

  window.gtag('js', new Date())
  window.gtag('config', trackingId)
}
