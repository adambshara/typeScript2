import "./App.css";
import { Greet } from "./components/greet";
import { Heading } from "./components/heading";
import { Oscar } from "./components/oscar";
import { Person } from "./components/persone";
import { PersonList } from "./components/personList";
import { Status } from "./components/status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Ahmad", last: "Bshara" },
    { first: "Princess", last: "Diana" },
  ];
  return (
    <div className="App">
      <Greet name="Ahmad" messageCount={20} isloggedin={false} />
      <Greet name="Ahmad" isloggedin={false} />
      if we don't want to add messages we can put an ? in the component that we
      are calling
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading children="Placeholder text" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
