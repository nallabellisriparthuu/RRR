import Hello from "./Array/Hello";
import Person from "./Object/Person";
function App() {
  const seatNumber = [1, 4, 7];
  const userName = {
    name: "Sai",
    age: 25,
    jobrole: "Developer",
    city: "Hyderabad"
  }
  return (
    <div>
      <Hello name="Don" age="18" city="Hyderabad" seatNumber={seatNumber}/>
      <Person userName={userName}/>
    </div>
  )
}

export default App
