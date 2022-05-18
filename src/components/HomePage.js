export default function HomePage({ $target }) {
  const $homePage = document.createElement("div");
  $homePage.classList = "homePage"
  $target.appendChild($homePage);

  $homePage.innerHTML = `
  <main class="homePage__main">
    <div class="homePage__main__image"></div>
    <nav class="homePage__nav">
      <button class="homePage__nav__button resume--scroll">RESUME</button>
      <button class="homePage__nav__button portfolio--scroll">Portfolio</button>
      <button class="homePage__nav__button aboutMe--scroll">About Me</button>
    </nav>
    <footer class="homePage__footer">© 이미지 울곰 / CC BY</footer>
  </main>
  `;
}
