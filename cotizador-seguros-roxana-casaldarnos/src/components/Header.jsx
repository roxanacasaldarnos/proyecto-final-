import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HeaderA = styled.header`
  background-color: #26C6DA;
  padding: 10px;
  font-weight: bold;
  color: #FFFFFF;
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin: 0px;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`;

const Header = ({ titulo }) => {
  return (
    <HeaderA>
      <H1>{ titulo }</H1>
    </HeaderA>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;