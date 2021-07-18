import React, { Fragment } from "react";
// // first import all css files then import all child jsx components
import "./App.css"
import 'src/assets/sass/main.scss'

import Natours from "src/containers/pages/natours/Natours"

function App() {
  return (
    <Fragment>
      <Natours />
    </Fragment>
  );
}

export default App;
