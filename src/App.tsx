import { useMediaQuery, useTheme } from "@mui/material";
import About from "./components/About"
import Header from "./components/Header"
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
      <p>Favorites(好きな技術)</p>
      <p>Contacts(連絡先)</p>
    </>
  )
}

export default App
