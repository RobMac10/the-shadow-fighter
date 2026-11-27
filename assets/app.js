(function () {
  var lb = document.getElementById("lightbox");
  if (!lb) return;
  var img = lb.querySelector("img");
  var closeBtn = lb.querySelector(".lightbox-close");

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt || "";
    lb.hidden = false;
    closeBtn.focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    img.removeAttribute("src");
    img.alt = "";
  }

  document.querySelectorAll("button.zoom").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var picture = btn.querySelector("img");
      if (!picture) return;
      openLightbox(picture.currentSrc || picture.src, picture.alt);
    });
  });
  closeBtn.addEventListener("click", closeLightbox);
  lb.addEventListener("click", function (e) {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lb.hidden) closeLightbox();
  });
})();
