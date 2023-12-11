import styled from "@emotion/styled";
import PropTypes from 'prop-types';

import { capitalizar } from "../helpers/resumen";

const AResumen = styled.div`
  background-color: #00828F;
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
`;

const Resumen = ({ datos }) => {

  const { marca, anno, plan } = datos;

  return (
    <AResumen>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li><b>Marca: </b>{ capitalizar(marca) }</li>
        <li><b>Año: </b>{ anno }</li>
        <li><b>Plan: </b>{ capitalizar(plan) }</li>
      </ul>
    </AResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
};

export default Resumen;