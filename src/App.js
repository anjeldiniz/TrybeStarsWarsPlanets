import React from 'react';
import './App.css';

import PlanetsProvider from './context/PlanetsProvider';
import Table from './pages/Table';
import Filter from './pages/Filter';

function App() {
  return (
    <PlanetsProvider>
      <Filter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
