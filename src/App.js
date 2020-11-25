import React from 'react';
import './App.css';
import useJsonFetch from './components/useJsonFetch';

function App() {
  const [data1, isLoading1, hasError1] = useJsonFetch('http://localhost:7070/data');
  const [data2, isLoading2, hasError2] = useJsonFetch('http://localhost:7070/error');
  const [data3, isLoading3, hasError3] = useJsonFetch(' http://localhost:7070/loading');

  return (
    <div>
      <p>{isLoading1 ? 'Loading1' : (data1 || hasError1)}</p>
      <p>{isLoading2 ? 'loading2' : (data2 || hasError2)}</p>
      <p>{isLoading3 ? 'loading3' : (data3 || hasError3)}</p>
    </div>
  );
}

export default App;
