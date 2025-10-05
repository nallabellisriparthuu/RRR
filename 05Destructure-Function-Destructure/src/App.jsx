import DesHello from "./DestructureCompo/DesHello";
import FunDes from "./FunDesCompo/FunDes";
function App() {
  return (
    <div>
      <DesHello name="ReactJS" />
      <DesHello message="Welcome" place="Hyderabad" />

      <FunDes name="Pandu"/>
      <FunDes message="Welcome"/>
      <FunDes state="Tealnagana" city="Hyderabad"/>
    </div>
  );
}

export default App;
