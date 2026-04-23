/*
 * exercises.js
 * Sdilene pomocne funkce pro vsechna cviceni.
 * Tento soubor se nacita ve vsech HTML cvicenich pres <script src="exercises.js">
 */

// Posle zpravu rodicovskemu oknu (Moodle iframe) aby prizpusobil vysku
function notifyResize() {
  var h = document.documentElement.scrollHeight;
  window.parent.postMessage({ type: 'iframeResize', height: h }, '*');
}

// Zkratka pro document.getElementById
function $(id) {
  return document.getElementById(id);
}

// Nastavi textovy obsah elementu podle id
function setText(id, text) {
  $(id).textContent = text;
}

// Nastavi innerHTML elementu podle id
function setHTML(id, html) {
  $(id).innerHTML = html;
}

// Vytvori novy HTML element s volitelnou tridou, textem a atributy
function el(tag, opts) {
  var e = document.createElement(tag);
  if (opts) {
    if (opts.cls) e.className = opts.cls;
    if (opts.text) e.textContent = opts.text;
    if (opts.html) e.innerHTML = opts.html;
    if (opts.attrs) {
      for (var k in opts.attrs) e.setAttribute(k, opts.attrs[k]);
    }
  }
  return e;
}

// Automaticky sleduje zmeny velikosti a posila notifyResize
(function() {
  var ro = new ResizeObserver(notifyResize);
  ro.observe(document.documentElement);
  window.addEventListener('load', notifyResize);
})();
