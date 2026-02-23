import { useEffect, useState } from "react";
import { AppContainer } from "./App.styled";
import works from "./data/works.json";
import { useVpSize } from "./hooks";
import { About, Blog, Blogs, Contacts, Favorites, Header, Works } from "./sections";
import { WorkData } from "./types";
import { BLOG_URL } from "./definitions/api";

function App() {
  const { vpSize } = useVpSize();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`${BLOG_URL}/api/latest-posts.json`);
      const data = await response.json();
      setBlogs(data);
    })()
  }, [setBlogs]);

  return (
    <AppContainer>
      <Header vpSize={vpSize} />
      <About vpSize={vpSize} />
      <Works works={works as WorkData[]} vpSize={vpSize} />
      <Blogs vpSize={vpSize} blogs={blogs} />
      <Favorites />
      <Contacts />
    </AppContainer>
  );
}

export default App;
