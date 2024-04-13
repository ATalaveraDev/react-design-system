import CodeSnippet from '../UI/CodeSnippet/CodeSnippet';
import Tooltip from '../components/Tooltip/Tooltip';

const TooltipsPage = () => {
  const snippet = `
    <Tooltip>This is a basic tooltip (bottom default tail)</Tooltip>
    <Tooltip tailPosition='right'>This is a basic tooltip (right tail)</Tooltip>
    <Tooltip tailPosition='top'>This is a basic tooltip (top tail)</Tooltip>
    <Tooltip tailPosition='left'>This is a basic tooltip (left tail)</Tooltip>
  `;

  return <>
    <h1>Tooltips</h1>
    <section className="tooltips-container">
      <Tooltip>This is a basic tooltip (bottom default tail)</Tooltip>
      <Tooltip tailPosition='right'>This is a basic tooltip (right tail)</Tooltip>
      <Tooltip tailPosition='top'>This is a basic tooltip (top tail)</Tooltip>
      <Tooltip tailPosition='left'>This is a basic tooltip (left tail)</Tooltip>
    </section>
    <section>
      <h3>Anatomy</h3>
      <CodeSnippet code={snippet} />
    </section>
    <section>
      <h3>API</h3>
    </section>
  </>
};

export default TooltipsPage;