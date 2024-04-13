import CodeSnippet from '../UI/CodeSnippet/CodeSnippet';

import Button from '../components/Button/Button';

const ButtonsPage = () => {
  const snippet = `
    <Button>No styles</Button>
    <Button basic type="submit" onClick={() => alert('Hey! Listen!')}>Basic</Button>
  `;

  return <>
    <h1>Buttons</h1>
    <section className="buttons-container">
      <Button>No styles</Button>
      <Button basic type="submit" onClick={() => alert('Hey! Listen!')}>Basic</Button>
    </section>
    <section>
      <h3>Anatomy</h3>
      <CodeSnippet code={snippet} />
    </section>
    <section>
      <h3>API Reference</h3>
    </section>
  </>
};

export default ButtonsPage;