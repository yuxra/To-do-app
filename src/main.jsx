import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Container from './compositional-component/container';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container/>
  </React.StrictMode>,
)
