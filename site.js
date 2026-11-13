// Publication filters (only runs on pages that have them)
(function () {
  var buttons = document.querySelectorAll('.filters button');
  if (!buttons.length) return;
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      buttons.forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      var f = b.dataset.f;
      document.querySelectorAll('.pub').forEach(function (p) {
        p.hidden = !(f === 'all' || p.dataset.c.split(' ').indexOf(f) > -1);
      });
    });
  });
})();
