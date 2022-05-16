export default function ProjectText(project) {
  const formattedLearn = project.learn.split("\n").map(v => v.trim()).join("<br>");
  
  return `
    <div class="project__content__text">
      <div class="project__content__text__header">
        <h5>${project.title}</h5>
        <div class="project__content__text__header--links">
        ${project.github ? `<a href=${project.github}> ✔ GitHub</a>` : ""}
        ${project.publish ? `<a href=${project.publish}> ✔ 배포링크</a>` : ""}
        ${project.memoir ? `<a href=${project.memoir}> ✔ 회고링크</a>` : ""}
        </div>
      </div>

      <div class="project__content__text__main">
        <p>${project.intro}</p>
        <p>✔ 사용 기술 : ${project.stack}</p>
        <p>✔ 주요 기능 : ${project.function}</p>
        ${project.role ? `<p>✔ 역할 : ${project.role}</p>` : ""}
        <p>✔ Learn :
          <p>${formattedLearn}</p>
        </p>
      </div>
    </div>
  `;
}
