/* ============================================================
   FOR — components.js
   Shared navbar & footer injection
   ============================================================ */

(function () {
  // Detect current page from pathname
  var path = window.location.pathname.split('/').pop() || 'index.html';

  // Map page filename → active link href
  var pageMap = {
    'index.html':  'index.html',
    'foto.html':   'foto.html',
    'video.html':  'video.html',
    'design.html': 'design.html',
    'website.html':'website.html',
    'editing.html':'editing.html',
  };

  var activeHref = pageMap[path] || 'index.html';

  // Build nav links — Editing added as 6th item
  var navItems = [
    { href: 'index.html',  label: 'Home'    },
    { href: 'foto.html',  label: 'Foto'    },
    { href: 'video.html', label: 'Video'   },
    { href: 'design.html',label: 'Design'  },
    { href: 'website.html',label:'Website' },
    { href: 'editing.html',label:'Editing' },
  ];

  var navLinksHTML = '';
  navItems.forEach(function (item) {
    var activeClass = (item.href === activeHref) ? ' class="active"' : '';
    navLinksHTML += '<li><a href="' + item.href + '"' + activeClass + '>' + item.label + '</a></li>\n      ';
  });

  var NAVBAR_HTML =
    '<nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">' + "\n" +
    '  <div class="logo">FOR</div>' + "\n" +
    '  <ul class="nav-links" id="navLinks">' + "\n" +
    '    ' + navLinksHTML +
    '  </ul>' + "\n" +
    '  <button type="button" class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">' + "\n" +
    '    <span></span>' + "\n" +
    '    <span></span>' + "\n" +
    '    <span></span>' + "\n" +
    '  </button>' + "\n" +
    '</nav>';

  // Full footer (index + website pages)
  var FOOTER_FULL_HTML =
    '<footer>' + "\n" +
    '  <div class="footer-social">' + "\n" +
    '    <a href="https://instagram.com/frameofrangga" target="_blank" rel="noopener" aria-label="Instagram">' + "\n" +
    '      <i class="fab fa-instagram"></i>' + "\n" +
    '    </a>' + "\n" +
    '    <a href="https://www.tiktok.com/@madebyrangga" target="_blank" rel="noopener" aria-label="TikTok">' + "\n" +
    '      <i class="fab fa-tiktok"></i>' + "\n" +
    '    </a>' + "\n" +
    '  </div>' + "\n" +
    '  <p><span class="footer-brand">Frame Of Rangga</span>. All rights reserved.</p>' + "\n" +
    '</footer>';

  // Minimal footer (all other pages)
  var FOOTER_MINIMAL_HTML =
    '<footer>' + "\n" +
    '  <p><span class="footer-brand">Frame Of Rangga</span>. All rights reserved.</p>' + "\n" +
    '</footer>';

  // Pages that get the full footer with social links
  var fullFooterPages = ['index.html', 'website.html'];

  function injectNavbar() {
    var el = document.getElementById('navbar-placeholder');
    if (el) el.innerHTML = NAVBAR_HTML;
  }

  function injectFooter() {
    var el = document.getElementById('footer-placeholder');
    if (el) {
      el.innerHTML = fullFooterPages.indexOf(path) !== -1
        ? FOOTER_FULL_HTML
        : FOOTER_MINIMAL_HTML;
    }
  }

  injectNavbar();
  injectFooter();
})();
