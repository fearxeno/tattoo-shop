export function scrollToSection(elementRef) {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
