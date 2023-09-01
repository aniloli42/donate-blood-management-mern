export default function handleOverflow(hideOverflow) {
  if (hideOverflow) {
    window.document.body.style.overflowY = 'hidden'
    return
  }
  window.document.body.style.overflowY = 'auto'
}
