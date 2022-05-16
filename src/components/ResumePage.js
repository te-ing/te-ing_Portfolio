import { EXPERIENCE } from "../constants/experience.js";
import { SKILLS } from "../constants/skills.js";

export default function ResumePage({ $target }) {
  const $resumePage = document.createElement("div");
  $resumePage.classList = "resumePage"
  $target.appendChild($resumePage);

  $resumePage.innerHTML = `
  <div class="resumePage__main">
    <div class="resumePage__main__image"></div>
    <div class="resumePage__main__info">
      <div class="resumePage__main__info--title">
        <h3>프론트엔드 개발자</h3> <h3>김태중</h3>
      </div>
      <div class="resumePage__main__info--subtitle">
        <p>email :
          <span class="resumePage__main__info--subtitle__detail">hi2177@naver.com</span>
        </p>
        <p>github :
          <span class="resumePage__main__info--subtitle__detail">https://github.com/te-ing</span>
        </p>
        <p>blog :
          <span class="resumePage__main__info--subtitle__detail">https://velog.io/@te-ing</span>
        </p>
      </div>
    </div>
  </div>

  <section class="resumePage__sub">
    <div class="resumePage__sub__experience">
      <h4>
        EXPERIENCE
      </h4>
      <article class="resumePage__sub__experience__article">
        ${EXPERIENCE.map(item => `
          <p>${item[0]}</p>
          <p>${item[1]}</p>
        `).join('')}
      </article>
    </div>
    <div class="resumePage__sub__skills">
      <h4>
        SKILLS
      </h4>
      <article class="resumePage__sub__skills__article">
        ${SKILLS.map(item =>`
        <div class="resumePage__sub__skills__article__container" >
        ${item[2] && `<img src=${item[2]} class="resumePage__sub__skills__article--image" />`}
          <div class="resumePage__sub__skills__article--text">
            <p>${item[0]}</p>
            <p>${item[1]}</p>
          </div>
        </div>
        `).join('')}
      </article>
    </div>
  </section>
  `;
}


