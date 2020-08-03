import * as React from "react";
import { render } from "react-dom";

//styles
import "./styles/main.scss";
//components

import App from "./app.tsx";

const root = document.querySelector("#root");

render(<App />, root);
