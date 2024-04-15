import CodeSnippet from '../UI/CodeSnippet/CodeSnippet';

import Button from '../components/Button/Button';

const ButtonsPage = () => {
  const snippet = `
    <Button bgcolor="blueviolet" size="small">Small</Button>
    <Button bgcolor="blueviolet" type="submit" onClick={() => alert('Hey! Listen!')}>Basic</Button>
    <Button bgcolor="blueviolet" size="large">Large</Button>
    <Button>No styles</Button>
  `;

  return <>
    <h1>Buttons</h1>
    <section>
      <p></p>
    </section>
    <section className="items-container">
      <Button bgcolor="blueviolet" size="small">Small</Button>
      <Button bgcolor="green" type="submit" onClick={() => alert('Hey! Listen!')}>Basic</Button>
      <Button bgcolor="blueviolet" color="white" size="large">Large</Button>
      <Button>No styles</Button>
    </section>
    <section>
      <h3>Anatomy</h3>
      <CodeSnippet code={snippet} />
    </section>
    <section>
      <h3>API Reference</h3>
      {/* {styler('button')`background-color: red`} */}
    </section>
  </>
};

export default ButtonsPage;