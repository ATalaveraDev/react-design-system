import { useRef } from 'react';
import CodeSnippet from '../UI/CodeSnippet/CodeSnippet';

import Button from '../components/Button/Button';

const ButtonsPage = () => {
  const snippet = `
    <Button bgcolor={() => 'red'} color="white" size="small">Small</Button>
    <Button bgcolor="green" color="white" type="submit" onClick={() => alert('Hey! Listen!')}>Basic</Button>
    <Button bgcolor="blueviolet" color="white" size="large">Large</Button>
    <Button ref={ref} onClick={handler}>No styles</Button>
  `;

  const ref = useRef<HTMLButtonElement>(null)

  const handler = () => {
    ref.current!.innerText = 'Ref test';
  }

  return <>
    <h1>Buttons</h1>
    <section>
      <p></p>
    </section>
    <section className="items-container">
      <Button bgcolor={() => 'red'} color="white" size="small">Small</Button>
      <Button bgcolor="green" color="white" type="submit" onClick={() => alert('Hey! Listen!')}>Basic</Button>
      <Button bgcolor="blueviolet" color="white" size="large">Large</Button>
      <Button ref={ref} onClick={handler}>No styles</Button>
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