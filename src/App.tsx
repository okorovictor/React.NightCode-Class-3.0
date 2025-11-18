import "./App.css";
import Form from "./Form";
import VideoPlayer from "./VideoPlayer";

function App() {
  return (
    <main className="grid justify-items-center min-h-screen py-20 gap-5 bg-gray-200">
      <Form />
      <VideoPlayer />
    </main>
  );
}

export default App;
