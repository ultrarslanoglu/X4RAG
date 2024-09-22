// frontend/src/components/QueryComponent.js
import React, { useState } from 'react';

function QueryComponent() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = async () => {
    const res = await fetch(`http://localhost:5000/api/query?question=${question}`);
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Sorgunuzu yazın"
      />
      <button onClick={handleQuery}>Sorgula</button>
      <pre>{response}</pre>
    </div>
  );
}

export default QueryComponent;
