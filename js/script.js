// Cambiar header al hacer scroll
window.addEventListener("scroll", function() {
  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    header.classList.remove("transparent");
    header.classList.add("scrolled");
  } else {
    header.classList.add("transparent");
    header.classList.remove("scrolled");
  }
});



// Abre el modal con la fuente del video seleccionada
document.querySelectorAll('.video-card[data-video]').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const src = card.getAttribute('data-video');
    const video = document.getElementById('videoPlayer');
    const source = document.getElementById('videoSource');
    source.src = src;
    video.load();
    const modal = new bootstrap.Modal(document.getElementById('videoModal'));
    modal.show();
  });
});

// Pausa el video al cerrar el modal
document.getElementById('videoModal')?.addEventListener('hidden.bs.modal', () => {
  const video = document.getElementById('videoPlayer');
  if (video) video.pause();
});
