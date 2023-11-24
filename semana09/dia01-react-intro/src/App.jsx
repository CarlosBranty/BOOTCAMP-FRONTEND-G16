// function App() {
//   return (
//    <h1>Hola que tal react</h1>
//   )
// }

// export default App

// const App = () => {
//   return<h1>Hola que tal react no me este provocando</h1>
// }
// export default App

// function Saludo(){
//   return <h1>Hola que tal react</h1>
// }
import Saludo from "./components/Saludo";
import Despedida from "./components/Despedida";
import { LISTA_DE_FRUTAS, EDAD } from "./components/Frutas";
import './demo.css';


const App = () => {
  return (
    <>
      <h1 style={{color:'red', textDecoration:'underline'}}>Holaaaaaa</h1>
      <Saludo/>
      <Despedida/>
      {1+2}
      {LISTA_DE_FRUTAS}
      {EDAD}

    </>
  );
};
export default App;
