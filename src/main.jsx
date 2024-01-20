import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "react-tabs/style/react-tabs.css";
import './index.css'
import "react-circular-progressbar/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
