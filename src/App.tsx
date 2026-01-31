import { AppContainer } from "./App.styled";
import works from "./data/works.json";
import { useVpSize } from "./hooks";
import { About, Contacts, Favorites, Header, Works } from "./sections";
import { WorkData } from "./types";

function App() {
  const { vpSize } = useVpSize();

  return (
    <AppContainer>
      <Header vpSize={vpSize} />
      <About vpSize={vpSize} />
      <Works works={works as WorkData[]} vpSize={vpSize} />
      <Favorites />
      <Contacts />
    </AppContainer>
  );
}

export default App;
