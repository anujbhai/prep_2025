import type { Article } from "..";
import ArticleItem from "../article-item";

interface IArticleListProps {
  articles: Article[];
  // onClickToggle: (id: number) => void;
  onClickRemove: (id: number) => void;
}
function ArticleList(props: IArticleListProps) {
  const {articles, onClickRemove} = props;

  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}

export default ArticleList;

