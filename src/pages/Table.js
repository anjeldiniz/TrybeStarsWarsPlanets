import React, { useContext } from 'react';
// import PlanetsProvider from '../context/PlanetsProvider';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { resultApi } = useContext(PlanetsContext);
  console.log(useContext(PlanetsContext));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { resultApi?.map((el, index) => (
          <tr key={ index }>
            <td>{ el.name }</td>
            <td>{ el.rotation_period }</td>
            <td>{ el.orbital_period }</td>
            <td>{ el.diameter }</td>
            <td>{ el.climate }</td>
            <td>{ el.gravity }</td>
            <td>{ el.terrain }</td>
            <td>{ el.surface_water}</td>
            <td>{ el.population }</td>
            <td>{ el.films }</td>
            <td>{ el.created }</td>
            <td>{ el.edited }</td>
            <td>{ el.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
