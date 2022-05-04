export default function HomePage({ $target }) {
  const $homePage = document.createElement("div");
  $homePage.classList = "homePage"
  $target.appendChild($homePage);

  $homePage.innerHTML = `
  <main class="homePage__main">
    <div class="homePage__main__subtitle">
      <h6>많은 사람들에게<h6>
      <h6>쉽게 쓰여지는<h6>
      <h6>서비스를 만들고 싶습니다.<h6>
    </div>
    <div class="homePage__main__title">
      <h1>프론트엔드 개발자</h1> <h1>김태중</h1>
    </div>
    <nav class="homePage__nav">
      <button class="homePage__nav__button">RESUME</button>
      <button class="homePage__nav__button">Portfolio</button>
      <button class="homePage__nav__button">About Me</button>
    </nav>
    <footer class="homePage__footer">© 이미지 울곰 / CC BY</footer>
  </main>
  `;
}
