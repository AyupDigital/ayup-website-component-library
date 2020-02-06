import React from "react";
import Button from "./components/Button/Button";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import SignUpButton from "./components/SignUpButton/SignUpButton";

library.add(fas);

function App() {
  return (
    <div className="App">
      <div>
        <Button text="Read more" />
        <Button text="Read more" disabled={true} />

        <Button text="Read more" alt={true} />
        <Button text="Read more" alt={true} disabled={true} />

        <SignUpButton text="Sign up" />
        <SignUpButton text="Sign up" disabled={true} />
      </div>
    </div>
  );
}

export default App;
