// Contoh: alert saat klik tombol "Pesan Sekarang"
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('page-loaded');
  // HAPUS ATAU KOMENTARI BAGIAN INI:
  // const pesanButtons = document.querySelectorAll('a.pesan-btn');
  // pesanButtons.forEach(function(btn) {
  //   btn.addEventListener('click', function(e) {
  //     alert('Anda akan diarahkan ke halaman pemesanan!');
  //   });
  // });
  // Animasi saat klik menu
  const navLinks = document.querySelectorAll('.nav-btn');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (link.target !== '_blank' && link.href && !link.href.startsWith('#')) {
        e.preventDefault();
        document.body.classList.remove('page-loaded');
        setTimeout(() => {
          window.location = link.href;
        }, 350);
      }
    });
  });

  // Custom animated alert for transaksi.html
  const form = document.querySelector('.content form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Create overlay and popup
      let overlay = document.createElement('div');
      overlay.className = 'custom-alert-overlay';
      let popup = document.createElement('div');
      popup.className = 'custom-alert-popup';
      popup.innerHTML = `
        <div class="custom-alert-title">Pemesanan Berhasil!</div>
        <div class="custom-alert-msg">Terima kasih, pesanan Anda telah diterima.<br>Anda akan diarahkan ke halaman invoice...</div>
        <div class="custom-alert-loader"></div>
      `;
      overlay.appendChild(popup);
      document.body.appendChild(overlay);

      // Animate out, then redirect
      setTimeout(() => {
        overlay.classList.add('hide');
        document.body.classList.remove('page-loaded');
        setTimeout(() => {
          window.location = 'invoice.html';
        }, 400);
      }, 1800);
    });
  }
});