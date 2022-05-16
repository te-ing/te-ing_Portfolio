import Aside from "./components/Aside.js";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import ResumePage from "./components/ResumePage.js";
import PortfolioPage from "./components/PortfolioPage.js";
import { PROJECTS } from "./constants/projects.js";

export default function App({ $target }) {
  const header = new Header({ $target });
  const aside = new Aside({ $target });
  const homePage = new HomePage({ $target });
  const resumePage = new ResumePage({ $target });
  const portfolioPage = new PortfolioPage({ $target, PROJECTS });

  /* 개발용 임시함수 */
  console.log(document.querySelector(".portfolioPage"))
  const scrollMove = () => {
    let location = document.querySelector(".portfolioPage").offsetHeight;
    // let location = document.querySelector(".portfolioPage").offsetTop
    console.log(location)
    window.scrollTo({ top: location, behavior: "smooth" });
  };
  scrollMove();
}
