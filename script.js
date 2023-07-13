var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

// Fungsi untuk mengupdate tanggal pada elemen dengan kelas blog-slider__code
function updateDateElements() {
    var dateElements = document.getElementsByClassName("blog-slider__code");
    var currentDate = new Date();
  
    // Format tanggal sesuai kebutuhan (contoh: "DD Month YYYY")
    var options = { day: 'numeric', month: 'long', year: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
  
    // Update isi setiap elemen dengan tanggal terkini
    for (var i = 0; i < dateElements.length; i++) {
      dateElements[i].textContent = formattedDate;
    }
  }
  
  // Jalankan fungsi saat halaman web dimuat
  window.onload = function() {
    updateDateElements();
  };
  
  