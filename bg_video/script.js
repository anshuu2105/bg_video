const video = document.getElementById("bgVideo");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fas fa-play"></i>';
  }
});
