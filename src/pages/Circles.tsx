import Circle from '../components/Circle/Circle';
import CodeSnippet from '../UI/CodeSnippet/CodeSnippet';

const CirclesPage = () => {
  const snippet = `
    <Circle d="50" />
    <Circle d="80" color="blue" />
    <Circle d="20" color="#E77013" />
  `;
  
  return <>
    <h1>Circles</h1>
    <section className="items-container">
      <Circle d="50" />
      <Circle d="80" color="blue" />
      <Circle d="20" color="#E77013" />
    </section>
    <section>
      <h3>Anatomy</h3>
      <CodeSnippet code={snippet} />
    </section>
    <section>
      <h3>API Reference</h3>
    </section>
  </>;
};

export default CirclesPage;