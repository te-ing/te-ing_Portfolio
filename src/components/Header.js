export default function Header({ $target }) {
  const $header = document.createElement("div");
  $header.classList = "header"
  $target.appendChild($header);

  $header.innerHTML = `
    <div class="header__circle"></div>
    <h4 class="header__title">
    te-ing’s Portfolio
    </h4>
    <div class="header__circle"></div>
  `;

}
