document.addEventListener('DOMContentLoaded', function() {
  // Adds target=_blank to all links that don't start with 'dagrev.is'.
  document.querySelectorAll('#body article section a').forEach(function(node) {
    var href = node.href
    var link = href.split('//')[1]
    if (link && link.indexOf('dagrev.is') !== 0) {
      node.rel = 'noopener'
      node.target = '_blank'
    }
  })

  // Written like this to avoid bots getting my... you know what.
  var doNotSpamThisNode = document.getElementById('do-not-spam-this')
  if (doNotSpamThisNode) {
    var dont = 'dagrevis'
    var spam = ['om', '.c', 'ail', 'gm'].reverse().join('')

    doNotSpamThisNode.innerText = dont + String.fromCharCode(Math.pow(4, 3)) + spam
  }
})
