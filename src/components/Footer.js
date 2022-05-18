export default function Footer({ $target }) {
  const $footer = document.createElement("div");
  $footer.classList = "footer"
  $target.appendChild($footer);

  $footer.innerHTML = `
  <footer class="footer">
    <div class="footer__left">
      <h4 class="footer__left--title">te-ing's Portfolio</h4>
      <p class="footer__left--body">많은 사람들에게</p>
      <p class="footer__left--body">쉽게 쓰여지는</p>
      <p class="footer__left--body">서비스를 만들고 싶습니다.</p>
    </div>
    <button class="material-icons footer__button footer--scroll">expand_less</button>
    <div class="footer__right">
      <h3 class="footer__right--mainTitle">저와 함께 일하고 싶으신가요?</h3>
      <h2 class="footer__right--subTitle">Recruit Me!</h2>
      <p class="footer__right--body">e-mail : hi2177@naver.com</p>
      <p class="footer__right--body">github : https://github.com/te-ing</p>
      <p class="footer__right--body">blog : https://velog.io/@te-ing</p>

    </div>
  </footer>
  `;
}
