import { TypeStyled } from './Type.styles';

const Type = ({ typeName }) => {
  return <TypeStyled type={typeName}>{typeName}</TypeStyled>;
};

export default Type;
