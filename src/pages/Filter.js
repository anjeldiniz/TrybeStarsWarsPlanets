import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const {
    valueInp,
    setValueInp,
    setFilterByNumericValues,
    setResultApi,
    optionColumn,
    setOptionColumn,
  } = useContext(PlanetsContext);

  const [newState, setNewState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  function handleClickFilter() {
    const { column, comparison, value } = newState;
    setFilterByNumericValues((previus) => ([...previus, newState]));
    setOptionColumn(optionColumn.filter((option) => option !== column));
    setNewState({ comparison: 'maior que', value: 0 });
    setResultApi((planets) => (planets?.filter((planet) => {
      if (comparison === 'maior que') {
        return planet[column] > Number(value);
      }
      if (comparison === 'menor que') {
        return planet[column] < Number(value);
      }
      return planet[column] === value;
    })));
  }

  function handleChange({ target }) {
    const { name, value } = target;
    console.log(value);
    setNewState((statePrevious) => ({ ...statePrevious,
      [name]: value }));
  }

  useEffect(() => {
    console.log(newState);
  }, [newState]);

  return (
    <>
      <label htmlFor="filterName">
        Projeto Start Wars - Trybe
        <br />
        <input
          data-testid="name-filter"
          type="text"
          id="filterName"
          value={ valueInp.name }
          onChange={ (e) => setValueInp({ name: e.target.value }) }
        />
      </label>
      <br />
      <label htmlFor="coluna">
        Coluna
        <br />
        <select
          data-testid="column-filter"
          value={ newState.column }
          name="column"
          id="coluna"
          onChange={ handleChange }
        >
          {optionColumn.map((el, index) => (
            <option
              id="coluna"
              key={ index }
              value={ el }
            >
              { el }
            </option>
          ))}
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
        </select>
      </label>
      <br />
      <label htmlFor="operador">
        Operador
        <br />
        <select
          data-testid="comparison-filter"
          value={ newState.comparison }
          name="comparison"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <br />
      <label htmlFor="filter">
        <input
          data-testid="value-filter"
          type="number"
          id="filternumber"
          value={ newState.value }
          name="value"
          onChange={ handleChange }
        />
      </label>
      <br />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClickFilter }
      >
        Filtrar
      </button>
    </>
  );
}

export default Filter;
