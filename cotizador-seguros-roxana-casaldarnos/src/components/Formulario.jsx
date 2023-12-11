import { Fragment, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

import { diferenciaAnnos, valorDepresiacion, valorExportacion, valorTipoPlan } from "../helpers/cotizar";
import Swal from 'sweetalert2';
import HistorialCotizaciones from "./HistorialCotizaciones";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #E1E1E1;
  --webkit-appearance: none;
`;
const Option = styled.option`
  background-color: #E1E1E1;
`;
const Radio = styled.input`
  margin: 0 1rem;
`;
const Button = styled.button`
  background-color: #00838F;
  font-style: 16px;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 3px;
  color: #FFFFFF;
  font-weight: bold;
  border: none;
  transition: background-color .2s ease;
  &:hover {
    background-color: #26C6DA;
    cursor: pointer;
  }
`;
const Error = styled.div`
  background-color: #c51d34;
  color: white;
  margin-bottom: 1.5rem;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
`;


const Formulario = ({ actualizarResumen, actualizarCargando }) => {

  const [ datos, actualizarDatos ] = useState({
    marca: '',
    anno: '',
    plan: ''
  });

  const [historialCotizaciones, setHistorialCotizaciones] = useState([]);

  // State para el error
  const [ error, actualizarError ] = useState(false);

  // estraer valores
  const { marca, anno, plan } = datos;

  const obtenerValores = e => {
    actualizarDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  }

  const enviarDatos = (e) => {
    e.preventDefault();
    if (marca.trim() === '' || anno.trim() === '' || plan.trim() === '') {
      actualizarError(true);
      return;
    }
    actualizarError(false);

    actualizarResumen({});

    let resultado = 2000;

    // Diferencia de años
    const diferencia = diferenciaAnnos(anno);
    
    // depresiacion
    resultado -= valorDepresiacion(resultado, diferencia);
    // Exportasion
    resultado = parseFloat(valorExportacion(marca) * resultado).toFixed(2);
    // Tipo de plan
    resultado = parseFloat(valorTipoPlan(plan) * resultado).toFixed(2);

    actualizarCargando(true);

    setTimeout(() => {
      actualizarResumen({
        cotizacion: Number(resultado),
        datos: {
          marca,
          anno,
          plan
        }
      });
      actualizarCargando(false);

      Swal.fire({
        icon: 'success',
        title: 'Cotización exitosa',
        text: `La cotización se ha realizado correctamente. El precio es: ${resultado}`,
      });

      const nuevaCotizacion = {
        cotizacion: Number(resultado),
        marca,
        anno,
        plan,
      };
      setHistorialCotizaciones([...historialCotizaciones, nuevaCotizacion]);
    }, 3000);
  } 

  

  return (
    <Fragment>
      <form onSubmit={enviarDatos}>
      {
        error 
          ?
        <Error>Todos los campos son obligatorios</Error>
          :
        null
      }
        <Campo>
          <Label htmlFor="marca">Marca</Label>
          <Select
            name="marca"
            value={marca}
            onChange={obtenerValores}
          >
            <Option value="" disabled>-- Seleccione --</Option>
            <option value="fiat">Fiat</option>
            <option value="toyota">Toyota</option>
            <option value="bmw">BMW</option>
            <option value="renault">Renault</option>
            <option value="volkswagen">Volkswagen</option>
            <option value="ford">Ford</option>
            <option value="honda">Honda</option>
            <option value="peugeot">Peugeot</option>
            <option value="nissan">Nissan</option>
            <option value="chevrolet">Chevrolet</option>
            <option value="citroen">Citroen</option>
          </Select>
        </Campo>
        <Campo>
          <Label htmlFor="anno">Año</Label>
          <Select
            name="anno"
            value={anno}
            onChange={obtenerValores}
          >
            <Option value="" disabled>-- Seleccione --</Option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Select>
        </Campo>
        <Campo>
          <Label htmlFor="plan">Plan</Label>
          <Radio
            type="radio"
            name="plan"
            value="basico"
            checked={plan === 'basico'}
            onChange={obtenerValores}
          /> Básico
          <Radio
            type="radio"
            name="plan"
            value="completo"
            checked={plan === 'completo'}          onChange={obtenerValores}
          /> Completo
        </Campo>
        <div>
          <Button type="submit" value="">Cotizar</Button>
        </div>
      </form>
       <HistorialCotizaciones cotizaciones={historialCotizaciones} />
    </Fragment>
  );
};

Formulario.propTypes = {
  actualizarResumen: PropTypes.func.isRequired ,
  actualizarCargando: PropTypes.func.isRequired ,
};

export default Formulario;