export default function Aside({ $target }) {
  const $aside = document.createElement("div");
  $aside.classList = "aside"
  $target.appendChild($aside);

  $aside.innerHTML = `
    <div class="aside__title">About Me</div>
    <div class="aside__title">Portfolio</div>
    <div class="aside__title">RESUME</div>
  `;
}
