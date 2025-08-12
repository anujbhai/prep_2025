import './App.css'
import Monolithic from './components/monolithic';
import ArticleAdd from './components/monolithic/article-add';
import ArticleList from './components/monolithic/article-list';
import Layout from './layout';

function App() {
  return (
    <>
      <section>
        <header>
          <h1>App header</h1>
        </header>

        <nav>
          <a href="#">Nav item</a>
        </nav>

        <main>
          <p>The main content...</p>

          <Layout>
            <>
              <Monolithic
                addArticle={({
                  title,
                  summary,
                  onChangeTitle,
                  onChangeSummary,
                  onClickAdd
                }) => (
                  <ArticleAdd
                    name="Articles"
                    title={title}
                    summary={summary}
                    onChangeTitle={onChangeTitle}
                    onChangeSummary={onChangeSummary}
                    onClickAdd={onClickAdd}
                  />
                )}
                articleList={({
                  articles,
                  onClickRemove
                }) => (
                  <ArticleList
                    articles={articles}
                    onClickRemove={onClickRemove}
                  />
                )}
              />
            </>
          </Layout>
        </main>

        <footer>
          <small>&copy; 2025</small>
        </footer>
      </section>
    </>
  )
}

export default App
