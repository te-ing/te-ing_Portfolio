import { INTERVIEW } from "../constants/interview.js";
import { formattingText } from "../utiles/utile.js"

export default function AboutMePage({ $target }) {
  const $aboutMePage = document.createElement("div");
  $aboutMePage.classList = "aboutMePage"
  $target.appendChild($aboutMePage);

  $aboutMePage.innerHTML = `
  ${INTERVIEW.map((interview, idx) => {
    return `
    ${idx == 0 ? `<h3 class="aboutMePage__header">ABOUT ME</h3>` : ""}
    <article class="aboutMePage__article">
    ${interview.image ? `<img src=${interview.image} class="aboutMePage__article__image" />` : ""}
      <div class="aboutMePage__article__text">
        <h4 class="aboutMePage__article__text--title">${interview.question}</h4>
        <p class="aboutMePage__article__body">${formattingText(interview.answer)}</p>
      </div>
    </article>
  `
  }).join('')}
  
  <footer class="aboutMePage__footer">
    <div class="aboutMePage__footer__left">
      <h4 class="aboutMePage__footer__left--title">te-ing's Portfolio</h4>
      <p class="aboutMePage__footer__left--body">많은 사람들에게</p>
      <p class="aboutMePage__footer__left--body">쉽게 쓰여지는</p>
      <p class="aboutMePage__footer__left--body">서비스를 만들고 싶습니다.</p>
    </div>
    <button class="material-icons aboutMePage__footer__button footer--scroll">expand_less</button>
    <div class="aboutMePage__footer__right">
      <h3 class="aboutMePage__footer__right--mainTitle">저와 함께 일하고 싶으신가요?</h3>
      <h2 class="aboutMePage__footer__right--subTitle">Recruit Me!</h2>
      <p class="aboutMePage__footer__right--body">e-mail : hi2177@naver.com</p>
      <p class="aboutMePage__footer__right--body">github : https://github.com/te-ing</p>
      <p class="aboutMePage__footer__right--body">blog : https://velog.io/@te-ing</p>

    </div>
  </footer>
  `;
}
