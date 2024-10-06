import { useMediaQuery, useTheme } from "@mui/material";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Works from "./components/Works";

function App() {
  const theme = useTheme();
  const isUpMedium = useMediaQuery(theme.breakpoints.up("md"));
  const isUpSmall = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Header isUpMedium={isUpMedium} isUpSmall={isUpSmall} />
      <About isUpSmall={isUpSmall} />
      <Works isUpMedium={isUpMedium} isUpSmall={isUpSmall} />
      <Favorites />
      <Contacts />
    </>
  );
}

export default App;
