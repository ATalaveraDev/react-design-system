import { useRef } from 'react';
import CodeSnippet from '../UI/CodeSnippet/CodeSnippet';

import Button from '../components/Button/Button';

const ButtonsPage = () => {
  const snippet = `
    <Button bgcolor={() => 'red'} color="white" size="small">Small</Button>
    <Button bgcolor="#3ea93e" color="white" type="submit" onClick={() => alert('Hey! Listen!')}>Regular</Button>
    <Button bgcolor="blueviolet" color="white" size="large">Large</Button>
    <Button ref={ref} onClick={handler}>No styles</Button>
  `;

  const ref = useRef<HTMLButtonElement>(null)

  const handler = () => {
    ref.current!.innerText = 'Ref test';
  }; 

  return <>
    <h1>Buttons</h1>
    <section>
      <p>This component allows you to create buttons by customizing their size and color. Any <b>native properties</b> are also supported. You can use refs or any react event</p>
    </section>
    <section className="items-container">
      <Button bgcolor={() => 'red'} color="white" size="small">Small</Button>
      <Button bgcolor="#3ea93e" color="white" type="submit" onClick={() => alert('Hey! Listen!')}>Regular</Button>
      <Button bgcolor="blueviolet" color="white" size="large">Large</Button>
      <Button ref={ref} onClick={handler}>No styles</Button>
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
          <div>bgcolor</div>
          <div>string | Function</div>
        </div>
        <div className="property-desc">
          <div>color</div>
          <div>string | Function</div>
        </div>
        <div className="property-desc">
          <div>size</div>
          <div>small | large</div>
        </div>
      </article>
    </section>
  </>
};

export default ButtonsPage;