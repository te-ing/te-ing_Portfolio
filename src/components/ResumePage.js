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
        <h4>프론트엔드 개발자</h4> <h4>김태중</h4>
      </div>
      <div class="resumePage__main__info--subtitle">
        <p>email :
          <span class="resumePage__main__info--subtitle__email">hi2177@naver.com</span>
        </p>
        <p>github :
          <span class="resumePage__main__info--subtitle__github">https://github.com/te-ing</span>
        </p>
        <p>blog :
          <span class="resumePage__main__info--subtitle__blog">https://velog.io/@te-ing</span>
        </p>
      </div>
    </div>
  </div>

  <section class="resumePage__sub">
    <div class="resumePage__sub__experience">
      <h5>
        EXPERIENCE
      </h5>
      <article class="resumePage__sub__experience__article">
        ${EXPERIENCE.map(item => `
          <p>${item[0]}</p>
          <p>${item[1]}</p>
        `).join('')}
      </article>
    </div>
    <div class="resumePage__sub__skills">
      <h5>
        SKILLS
      </h5>
      <article class="resumePage__sub__skills__article">
        ${SKILLS.map(item =>`
          <p>${item[0]}</p>
          <p>${item[1]}</p>
        `).join('')}
      </article>
    </div>

  </section>
  `;
}


