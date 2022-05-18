import Aside from "./components/Aside.js";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import ResumePage from "./components/ResumePage.js";
import PortfolioPage from "./components/PortfolioPage.js";
import { PROJECTS } from "./constants/projects.js";
import AboutMePage from "./components/AboutMePage.js";
import { pageScroll } from "/src/utiles/utile.js";

export default function App({ $target }) {
  const header = new Header({ $target });
  const aside = new Aside({ $target });
  const homePage = new HomePage({ $target });
  const resumePage = new ResumePage({ $target });
  const portfolioPage = new PortfolioPage({ $target, PROJECTS });
  const aboutMePage = new AboutMePage({ $target });
}

const scroll = window.onload = () => {
  const header = document.querySelector(".header--scroll");
  const aboutMe = document.querySelectorAll(".aboutMe--scroll");
  const portfolio = document.querySelectorAll(".portfolio--scroll");
  const resume = document.querySelectorAll(".resume--scroll");
  const footer = document.querySelector(".footer--scroll");
  
  header.onclick = () => window.scrollTo({ top: location, behavior: "smooth" });
  aboutMe.forEach(item => item.onclick = () => pageScroll("aboutMePage"));
  portfolio.forEach(item => item.onclick = () => pageScroll("portfolioPage"));
  resume.forEach(item => item.onclick = () => pageScroll("resumePage"));
  footer.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}
