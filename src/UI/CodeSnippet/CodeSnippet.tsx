import { FC, useEffect } from 'react';

import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";

const CodeSnippet: FC<{code: string}> = ({code}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <div className="code-container">
    <pre><code className="language-javascript">{code}</code></pre>
  </div>;
};

export default CodeSnippet;