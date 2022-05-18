export function formattingText(text) {
  return text.split("\n").map(v => v.trim()).join("<br>");
};

export function pageScroll(page) {
  let location = document.querySelector(`.${page}`).offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
};

export default { formattingText, pageScroll };
