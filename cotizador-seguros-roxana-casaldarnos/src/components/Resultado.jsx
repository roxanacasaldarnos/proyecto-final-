import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';

const Div = styled.div`
  background-color: rgb(127, 224, 237);
  text-align: center;
  padding: .5rem 0;
  border: 1px solid #26C6DA;
  margin-top: 1rem;
  position: relative;
`;

const P = styled.p`
  color: #00838F;
  padding: 1rem 0;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Resultado = ({ cotizacion }) => {
  return (
    <Div>
      <TransitionGroup
        component="span"
        className="resultado"
      >
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <P><b>Total: </b><span>{ cotizacion }</span></P>
        </CSSTransition>
      </TransitionGroup>
    </Div>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired
};

export default Resultado;