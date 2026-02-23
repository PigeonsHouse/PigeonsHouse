import { useMemo } from "react";
import { SectionTitle } from "../../components";
import { Color, ViewportSize } from "../../definitions";
import { BLOG_URL } from "../../definitions/api";
import { Container } from "./styled";

export type Blog = {
  slug: string;
  collection: string;
  title: string;
  publishedAt: string;
  updatedAt: string | null;
  thumbnail: string;
  description: string | null;
  path: string;
}

type BlogsProps = {
  blogs: Blog[];
  vpSize: ViewportSize;
}

export const Blogs: React.FC<BlogsProps> = ({ blogs, vpSize }) => {
  const gridTemplateColumns = useMemo(() => {
    switch (vpSize) {
      case "large":
        return "1fr 1fr 1fr";
      case "middle":
        return "1fr 1fr";
      case "small":
        return "1fr";
    }
  }, [vpSize]);
  return (
    <Container>
      <SectionTitle title="Blogs" vpSize={vpSize} />
      <div style={{display: 'grid', gap: 16, gridTemplateColumns }}>
        {blogs.map(blog => (
          <a key={blog.slug} href={`${BLOG_URL}${blog.path}`} style={{color: "unset", textDecoration: "none"}}>
          <div  style={{width: "100%",   padding: "8px 16px", boxSizing:"border-box", backgroundColor: Color.White, borderRadius: 8, boxShadow: `4px 4px 8px ${Color.LightGray}`
          }}>
            <img style={{ display: "block", marginBottom: 16, aspectRatio: 16 / 9, width: "100%", objectFit: "cover", borderRadius: 8, boxSizing:'border-box', border: `1px solid ${Color.LightGray}` }} src={`${BLOG_URL}${blog.thumbnail}`} />
            <div style={{ fontWeight: "bold", fontSize: 20}}>{blog.title}</div>
            <div style={{ color: Color.Gray, height: 48, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis", WebkitLineClamp: 2}}>{blog.description}</div>
            <div style={{color: Color.Gray, fontSize: 14}}>{(new Date(blog.publishedAt)).toLocaleDateString("ja-JP")}</div>
          </div>
          </a>
        ))}

      </div>
    </Container>
  );
};
