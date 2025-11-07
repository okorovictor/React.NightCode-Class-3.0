import "./App.css";
import Books from "./Books";
//import Products from "./Products";

function App() {
  return (
    <main className="grid justify-items-center min-h-screen py-20 gap-5 bg-gray-200">
      {/* <Products /> */}
      <Books bgColor="bg-gray-100" />
    </main>
  );
}

export default App;
