import { SearchPage } from "./pages/SearchPage";
import "./App.css";
const App = () => {
  return (
    <>
      <header className="main-header">
        <span className="logo">🎶</span>
        <span className="brand-title">Music Store</span>
      </header>
      <SearchPage />
    </>
  );
};
export default App;