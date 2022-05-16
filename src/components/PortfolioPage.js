import ProjectImage from "./ProjectImage.js";
import ProjectText from "./ProjectText.js";

export default function PortfolioPage({ $target, PROJECTS }) {
  const $portfolioPage = document.createElement("div");
  $portfolioPage.classList = "portfolioPage"
  $target.appendChild($portfolioPage);

  $portfolioPage.innerHTML =
    PROJECTS.map((project) => {
      return `
    <section class="portfolioPage__projects">
      <article class="project">
        <div class="project__header"> 
          <h5 class="project__header__main">${project.header}</h5>
          <span class="project__header__sub">${project.subHeader}</span>
        </div> 
        <div class="project__content">
          ${ProjectImage(project)}
          ${ProjectText(project)}
      </article>
  
    </section>
    `;
    }).join('')
  
  /* 프로젝트 이미지 slide */
  const images = document.querySelectorAll(".project__content__image");
  images.forEach(image => image.addEventListener('click', (e) => {
    const slides = e.currentTarget.children[0];
    if (e.target.className === "project__content__image--prev") {
      if (Number(slides.style.left.slice(1, -2)) === 0) {
        slides.style.left = `-${300 * (slides.children.length-1)}px`;
      } else {
        slides.style.left = `-${Number(slides.style.left.slice(1,-2)) - 300}px`;
      }
    } else {
      if (Number(slides.style.left.slice(1, -2)) === 300 * (slides.children.length-1)) {
        slides.style.left = 0;
      } else {
        slides.style.left = `-${Number(slides.style.left.slice(1,-2)) + 300}px`; 
      }
    }
  }));
}