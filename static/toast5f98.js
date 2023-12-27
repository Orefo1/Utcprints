function toast(type, html) {
  Toastify({
    text: html,
    duration: 5000,
    close: false,
    gravity: 'top',
    positionLeft: false,
    className: `toast-${type}`
  }).showToast()
}

/* turning flask flash messages into js popup notifications */
window.popupMessages.forEach(function(m, i) {
  var category = m[0] === 'message' || !m[0] ? 'info' : m[0]
  var text = m[1]
  setTimeout(function() {
    toast(category, text)
  }, (1 + i) * 1500)
})
