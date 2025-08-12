import {
  useCallback,
  useState,
  type ChangeEvent,
  type ReactNode
} from "react";

export interface Article {
  id: number;
  title: string;
  summary: string;
  display: string;
}
interface IAddArticleProps {
  title: string;
  summary: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSummary: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickAdd: () => void;
}
interface IArticleListProps {
  articles: Article[];
  onClickRemove: (id: number) => void;
}
interface IArticleProps {
  addArticle: (arg0: IAddArticleProps) => ReactNode;
  articleList: (arg0: IArticleListProps) => ReactNode;
}

const id = (function* () {
  let i = 1;

  while (true) {
    yield i;
    i += 1;
  }
}) ();

function Monolithic(props: IArticleProps) {
  const {addArticle, articleList} = props;
  const [articles, setArticles] = useState<Article[]>([
    {
      id: id.next().value,
      title: "Article 1",
      summary: "Article 1 Summary",
      display: "none"
    },
    {
      id: id.next().value,
      title: "Article 2",
      summary: "Article 3 Summary",
      display: "none"
    }
  ]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onChangeSummary = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSummary(e.target.value);
  }, []);

  const onClickAdd = useCallback(() => {
    setArticles((state) => [
      ...state,
      {
        id: id.next().value,
        title: title,
        summary: summary,
        display: "none",
      }
    ]);

    setTitle("");
    setSummary("");
  }, [summary, title]);

  const onClickRemove = useCallback((id: number) => {
    setArticles((state) => state.filter((article) => article.id !== id));
  }, []);

  return (
    <section>
      {addArticle({
        title,
        summary,
        onChangeTitle,
        onChangeSummary,
        onClickAdd
      })}
      {articleList({
        articles,
        onClickRemove
      })}
    </section>
  );
}

export default Monolithic;

