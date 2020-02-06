import React from "react";
import Button from "./components/Button/Button";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import SignUpButton from "./components/SignUpButton/SignUpButton";
import Link from "./components/Link/Link";
import { BrowserRouter } from "react-router-dom";

library.add(fas);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Button text="Read more" />
          <Button text="Read more" disabled={true} />

          <Button text="Read more" alt={true} />
          <Button text="Read more" alt={true} disabled={true} />

          <SignUpButton text="Sign up" />
          <SignUpButton text="Sign up" disabled={true} />
        </div>

        <div style={{ padding: "20px 0" }}>
          <Link to="/" text="Read more" />
          <Link to="/" text="Read more" icon={true} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
