import type { ChangeEvent } from "react";

interface IArticleAddProps {
  name: string;
  title: string;
  summary: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSummary: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickAdd: () => void;
}

function ArticleAdd(props: IArticleAddProps) {
  const {
    name,
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd
  } = props;

  return (
    <header>
      <h1>{name}</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
      />

      <input
        placeholder="Summary"
        value={summary}
        onChange={onChangeSummary}
      />
      
      <button onClick={onClickAdd}>Add</button>
    </header>
  );
}

export default ArticleAdd;

