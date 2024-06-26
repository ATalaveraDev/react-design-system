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
    <section>
      <p>This component allows you to create tooltips by customizing the position of the arrow. Any <b>native properties</b> are also supported. You can use refs or any react event</p>
    </section>
    <section className="items-container">
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
      <h3>API Reference</h3>
      <article>
        <div className="property-desc">
          <div>PROPERTY</div>
          <div>TYPE</div>
        </div>
        <div className="property-desc">
          <div>tailPosition</div>
          <div>right | top | left</div>
        </div>
      </article>
    </section>
  </>
};

export default TooltipsPage;