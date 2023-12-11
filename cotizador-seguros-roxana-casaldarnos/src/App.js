import { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";



const Contenedor = styled.div`
  max-width: 800px;
  margin: 0 auto;
 
`;
const ContenedroFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 2rem;
`;

function App() {

  const [ resumen, actualizarResumen ] = useState({});
  const [ cargando, actualizarCargando ] = useState(false);

  const { cotizacion, datos } = resumen; 

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />

      <ContenedroFormulario>
        <Formulario
          actualizarResumen={actualizarResumen}
          actualizarCargando={actualizarCargando}
        />
        {
          datos
            ?
          <Resumen datos={datos} />
            :
          null
        }
        {
          cargando
            ?
          <Spinner />
            :
          null
        }
        {
          cotizacion
            ?
          <Resultado cotizacion={cotizacion} />
            :
          null
        }
        
      </ContenedroFormulario>
    </Contenedor>
  );

}

export default App;
