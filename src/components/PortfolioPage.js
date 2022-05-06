export default function PortfolioPage({ $target }) {
  const $portfolioPage = document.createElement("div");
  $portfolioPage.classList = "portfolioPage"
  $target.appendChild($portfolioPage);

  $portfolioPage.innerHTML = `
  <h4 class="portfolioPage__header">
    PROJECTS
  </h4>
  <section class="portfolioPage__projects">
    <article class="project">
      <div class="project__header"> 
        <h5 class="project__header__main">기부매칭 서비스 Need it</h5>
        <span class="project__header__sub"> 2021.12 ( Front 4 / Back 3 ) </span>
      </div>
      <div class="project__content">
        <div class="project__content__image">
          <div class="project__content__image__container"></div>
          <span class="project__content__image__page">1 / 4</span>
          <span class="project__content__image__page">클릭시 다음 페이지로 넘어갑니다</span>
        </div>
        
        <div class="project__content__text">
          <div class="project__content__text__header">
            <h5>Need it</h5>
            <div class="project__content__text__header--links">
              <span>GitHub</span>
              <span>배포링크</span>
              <span>회고링크</span>
            </div>
          </div>

          <div class="project__content__text__main">
            <p>한줄 소개 :</p>
            <p>사용 기술 :</p>
            <p>주요 기능 :</p>
            <p>역할 :</p>
            <p>Learn :</p>
          </div>
        </div>
      </div>
    </article>

  </section>
  `;
}
