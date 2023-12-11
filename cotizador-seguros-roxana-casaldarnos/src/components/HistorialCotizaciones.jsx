import React from "react";
import PropTypes from "prop-types";

const HistorialCotizaciones = ({ cotizaciones }) => {
  return (
    <div>
      <h2>Historial de Cotizaciones</h2>
      <ul>
        {cotizaciones.map((cotizacion, index) => (
          <li key={index}>
            <p>Cotización N°{index + 1}</p>
            <p>Marca: {cotizacion.marca}</p>
            <p>Año: {cotizacion.anno}</p>
            <p>Plan: {cotizacion.plan}</p>
            <p>Cotización: {cotizacion.cotizacion}</p>
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
};

HistorialCotizaciones.propTypes = {
  cotizaciones: PropTypes.array.isRequired,
};

export default HistorialCotizaciones;
