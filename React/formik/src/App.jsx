// import FormTurn from './components/FormTurn/FormTurn';
import FormTurnFormikComponents from './components/FormTurn/FormTurn-FormikComponents';
import { GlobalStyles, Wrapper } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Wrapper>
        {/* <FormTurn /> */}
        <FormTurnFormikComponents />
      </Wrapper>
      <GlobalStyles />
    </>
  );
}

export default App;
