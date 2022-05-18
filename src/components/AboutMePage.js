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
  `;
}
