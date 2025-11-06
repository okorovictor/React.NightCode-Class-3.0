import "./App.css";
import Button from "./Button";
import { pupils } from "./pupils";

function App() {
  const isValid = false;

  return (
    <main className="grid justify-items-center min-h-screen py-20 gap-5 bg-gray-00">
      <h1>Welcome to my page</h1>

      {/* Props */}

      <section className="space-x-5">
        {isValid ? (
          <Button
            btnBgColor="bg-red-500"
            btnText="Log In"
            handleClick={() => console.log("Login Successfully")}
          />
        ) : (
          <Button
            btnBgColor="bg-blue-500"
            btnText="Sign Up"
            handleClick={() => console.log("Signin Successfully")}
          />
        )}

        <Button
          btnBgColor="bg-green-500"
          btnText="Get STarted"
          handleClick={() => console.log("Get Started Successfully")}
        />
        <Button
          btnText="Explore More"
          handleClick={() => alert("Visit my X(twitter) handle")}
        />
      </section>

      {/* List Rendering */}

      <ol>
        {pupils.map((pupil) => (
          <li key={pupil.id}>{pupil.name}</li>
        ))}
      </ol>
    </main>
  );
}

export default App;
