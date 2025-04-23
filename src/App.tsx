import React, { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [filter, setFilter] = useState('');
  return <Home filter={filter} onFilterChange={setFilter} />;
}

export default App;
