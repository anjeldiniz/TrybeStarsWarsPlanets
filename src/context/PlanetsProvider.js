import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetas from '../api/planetsApi';

function PlanetsProvider({ children }) {
  const [resultApi, setResultApi] = useState();
  const [valueInp, setValueInp] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const fetchResultApi = async () => {
      const resultApiResponse = await fetchPlanetas();
      // console.log(resultApiResponse);
      setResultApi(resultApiResponse.results);
    };
    fetchResultApi();
  }, []);

  const contextValue = {
    resultApi,
    setResultApi,
    valueInp,
    setValueInp,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
