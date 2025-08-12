import { useCallback, useState } from "react";
import type { Article } from "..";

interface IArticleItemProps {
  article: Article;
  onClickRemove: (id: number) => void;
}

function ArticleItem(props: IArticleItemProps) {
  const {article, onClickRemove} = props;

  const [isOpened, setIsOpened] = useState(article.display !== "none");

  const onClickToggle = useCallback(() => {
    setIsOpened((state) => !state);
  }, []);

  return (
    <li key={article.id}>
      <a
        href={`#${article.id}`}
        title="Toggle summary"
        onClick={onClickToggle}
      >
        {article.title}
      </a>
      <hr />
      <button
        title="Remove"
        onClick={() => onClickRemove(article.id)}
      >
        &#10007;
      </button>

      <p style={{display: isOpened ? "block" : "none"}}>{article.summary}</p>
    </li>
  );

}

export default ArticleItem;

