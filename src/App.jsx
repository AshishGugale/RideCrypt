import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ThemeProvider, setTheme } from "./components/theme/shadcnDark";
import { Web3Provider, Web3Context } from "./context/web3Context";

function App() {
  return (
    <Web3Provider>
      <ThemeProvider>
        <nav>
          <Navbar setTheme={setTheme} />
        </nav>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </Web3Provider>
  );
}

export default App;
