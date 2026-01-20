import "./App.css";
import Chat from "./Chat";
import Memo from "./Memo";

function App() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-5 bg-gray-200">
      {/* <Memo /> */}
      <Chat messages={["Nice post!", "I agree"]} />
    </main>
  );
}

export default App;
