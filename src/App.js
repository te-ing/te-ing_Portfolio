import Aside from "./components/Aside.js";
import Header from "./components/Header.js";

export default function App({ $target }) {
  const header = new Header({ $target });
  const aside = new Aside({ $target });
}