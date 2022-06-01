import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CakeSection from "./components/CakeSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        <HeroSection />
        <CakeSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
