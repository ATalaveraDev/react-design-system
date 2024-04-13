import CodeSnippet from '../UI/CodeSnippet/CodeSnippet';
import VerticalAxis from '../components/VerticalAxis/VerticalAxis';
import HorizontalAxis from '../components/HorizontalAxis/HorizontalAxis';
import ResponsiveChart from '../components/ResponsiveChart/ResponsiveChart';

const ChartsPage = () => {
  const snippet = `
  <ResponsiveChart 
    renderX={(range: number[]) => <HorizontalAxis range={range} domain={[0, 180]} color="red" tickColor="black" tickHeight="5" />}
    renderY={(range: number[]) => <VerticalAxis range={range} domain={[0, 50]} color="red" tickColor="red" tickWidth="5" />}
  />
  `;
  
  return <>
    <h1>Axis & Responsive Charts (In progress)</h1>
    <section className="charts-container">
      <ResponsiveChart 
        renderX={(range: number[]) => <HorizontalAxis range={range} domain={[0, 180]} color="red" tickColor="black" tickHeight="5" />}
        renderY={(range: number[]) => <VerticalAxis range={range} domain={[0, 50]} color="red" tickColor="red" tickWidth="5" />}
      />
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

export default ChartsPage;