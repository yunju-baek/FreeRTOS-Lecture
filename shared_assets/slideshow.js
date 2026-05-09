(() => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  if (!slides.length || window.__freeRtosSlideshowReady) return;
  window.__freeRtosSlideshowReady = true;

  const startButton = document.querySelector("[data-slideshow-start]");
  const prevButton = document.querySelector("[data-slide-prev]");
  const nextButton = document.querySelector("[data-slide-next]");
  const exitButton = document.querySelector("[data-slide-exit]");
  const fullscreenButton = document.querySelector("[data-slide-fullscreen]");
  const fillButton = document.querySelector("[data-slide-fill]");
  const counter = document.querySelector("[data-slide-counter]");
  let current = 0;
  let fillMode = false;

  const clamp = (value) => Math.max(0, Math.min(slides.length - 1, value));
  const indexFromHash = () => {
    const match = window.location.hash.match(/^#s(\d+)$/);
    return match ? clamp(Number(match[1]) - 1) : 0;
  };
  const isSlideshow = () => document.body.classList.contains("slideshow");

  const updateScale = () => {
    if (!isSlideshow()) return;
    const widthScale = window.innerWidth / 1280;
    const heightScale = window.innerHeight / 720;
    const scale = fillMode ? Math.max(widthScale, heightScale) : Math.min(widthScale, heightScale);
    document.documentElement.style.setProperty("--slide-scale", String(scale));
  };

  const setSlide = (index, updateHash = true) => {
    current = clamp(index);
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === current);
    });
    if (counter) counter.textContent = `${String(current + 1).padStart(2, "0")} / ${slides.length}`;
    if (updateHash) history.replaceState(null, "", `#s${current + 1}`);
  };

  const requestFullscreen = () => {
    const root = document.documentElement;
    if (!document.fullscreenElement && root.requestFullscreen) {
      root.requestFullscreen().catch(() => {});
    }
  };

  const enterSlideshow = (fullscreen = false) => {
    document.documentElement.classList.add("slideshow-root");
    document.body.classList.add("slideshow");
    setSlide(indexFromHash(), false);
    updateScale();
    if (fullscreen) requestFullscreen();
  };

  const exitSlideshow = () => {
    const active = slides[current];
    document.body.classList.remove("slideshow", "slide-fill");
    document.documentElement.classList.remove("slideshow-root");
    document.documentElement.style.removeProperty("--slide-scale");
    fillMode = false;
    if (fillButton) {
      fillButton.textContent = "Fill";
      fillButton.setAttribute("aria-pressed", "false");
    }
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    if (active) active.scrollIntoView({ block: "start" });
  };

  const toggleSlideshow = () => {
    if (isSlideshow()) exitSlideshow();
    else enterSlideshow(false);
  };

  const toggleFill = () => {
    fillMode = !fillMode;
    document.body.classList.toggle("slide-fill", fillMode);
    if (fillButton) {
      fillButton.textContent = fillMode ? "Fit" : "Fill";
      fillButton.setAttribute("aria-pressed", String(fillMode));
    }
    updateScale();
  };

  const next = () => setSlide(current + 1);
  const prev = () => setSlide(current - 1);

  startButton?.addEventListener("click", () => enterSlideshow(true));
  nextButton?.addEventListener("click", next);
  prevButton?.addEventListener("click", prev);
  exitButton?.addEventListener("click", exitSlideshow);
  fullscreenButton?.addEventListener("click", requestFullscreen);
  fillButton?.addEventListener("click", toggleFill);

  window.addEventListener("resize", updateScale);
  document.addEventListener("fullscreenchange", updateScale);
  window.addEventListener("hashchange", () => {
    if (isSlideshow()) setSlide(indexFromHash(), false);
  });

  document.addEventListener("keydown", (event) => {
    const tag = event.target?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (event.target?.isContentEditable) return;

    if (event.key.toLowerCase() === "s") {
      event.preventDefault();
      toggleSlideshow();
      return;
    }

    if (!isSlideshow()) return;

    if (["ArrowRight", "PageDown", " ", "Enter"].includes(event.key)) {
      event.preventDefault();
      next();
    } else if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) {
      event.preventDefault();
      prev();
    } else if (event.key === "Home") {
      event.preventDefault();
      setSlide(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setSlide(slides.length - 1);
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      requestFullscreen();
    } else if (event.key.toLowerCase() === "z") {
      event.preventDefault();
      toggleFill();
    } else if (event.key === "Escape") {
      event.preventDefault();
      exitSlideshow();
    }
  });

  if (new URLSearchParams(window.location.search).get("show") === "1") {
    enterSlideshow(false);
  }
})();
