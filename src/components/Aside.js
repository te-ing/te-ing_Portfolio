export default function Aside({ $target }) {
  const $aside = document.createElement("div");
  $aside.classList = "aside"
  $target.appendChild($aside);
  $aside.innerHTML = `
  <div class="aside__title resume--scroll">RESUME</div>
  <div class="aside__title portfolio--scroll">Portfolio</div>
  <div class="aside__title aboutMe--scroll">About Me</div>
  `;
}
