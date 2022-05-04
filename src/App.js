import Aside from "./components/Aside.js";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";

export default function App({ $target }) {
  const header = new Header({ $target });
  const aside = new Aside({ $target });
  const homePage = new HomePage({ $target });
}