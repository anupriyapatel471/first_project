import "./App.css";
import style from "./App.module.css";
import InputBox from "./components/inputBox";
import ButtonContainer from "./components/buttonContainer";
function App() {
  return (
    <div className={style.calculator}>
      <InputBox></InputBox>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
