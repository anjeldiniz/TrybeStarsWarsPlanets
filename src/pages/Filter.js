import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { valueInp, setValueInp } = useContext(PlanetsContext);

  // function filterByName() {
  //   const planetFilter = resultsApi
  //     ?.filter((planetName) => planetName.name.includes(valueInp.name));
  //   return planetFilter;
  // }

  return (
    <label htmlFor="filterName">
      <input
        data-testid="name-filter"
        type="text"
        id="filterName"
        value={ valueInp.name }
        onChange={ (e) => setValueInp({ name: e.target.value }) }
      />
    </label>
  );
}

export default Filter;
