import "./App.css";

const currentDate = new Date();
const year = currentDate.getFullYear();
const time = currentDate.toLocaleTimeString(); // Get the current time in a readable format

function App() {
  return (
    <>
      <p>
        This is the date: {year}, and this is the current time: {time}
      </p>
    </>
  );
}

export default App;
