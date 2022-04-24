import apiResult from '../apiResult.json';
// const APIPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetas() {
  // const response = await fetch(APIPOINT);
  // const planetasResponse = await response.json();

  // return planetasResponse;

  return apiResult;
}

export default fetchPlanetas;
