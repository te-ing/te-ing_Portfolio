export default function ProjectImage(project) {
  
  return `
    <div class="project__content__image">
      <div class="project__content__image__slides"> 
      ${project.image.map(img => {return `<img src=${img} class="project__content__image__slides--item" />`}).join('')}
      </div>
      <button class="project__content__image--prev" >◀</button>
      <button class="project__content__image--next" >▶</button>
    </div>
  `;
}