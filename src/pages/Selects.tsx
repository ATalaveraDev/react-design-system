import { useRef, useState } from 'react';
import CodeSnippet from '../UI/CodeSnippet/CodeSnippet';
import Select from '../components/Select/Select';

const SelectsPage = () => {
  const snippet = `
    
  `;

  const ref = useRef<HTMLButtonElement>(null)

  const handler = () => {
    ref.current!.innerText = 'Ref test';
  }; 
  const [selectValue, setSelectValue] = useState('');

  return <>
    <h1>Selects</h1>
    <section>
      <p></p>
    </section>
    <section className="items-container">
      <Select 
        onChange={(value) => setSelectValue(value as string)}
        value={selectValue}
        disabled
        options={[
          {
            value: 'aaa',
            text: 'The value is super long long long'
          },
          {
            value: 'bb',
            text: 'The second option'
          }
        ]}
      />
    </section>
    <section>
      <h3>Anatomy</h3>
      <CodeSnippet code={snippet} />
    </section>
    <section>
      <h3>API Reference</h3>
      {/* <article>
        <div className="property-desc">
          <div>PROPERTY</div>
          <div>TYPE</div>
        </div>
        <div className="property-desc">
          <div></div>
          <div></div>
        </div>
      </article> */}
    </section>
  </>
};

export default SelectsPage;