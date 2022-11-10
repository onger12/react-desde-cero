import React from 'react';
import ReactDOM from 'react-dom/client';


// import { CounterApp } from './01-useState/CounterApp';
import { CounterAppWithHook } from './01-useState/CounterAppWithHook';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterAppWithHook />
  </React.StrictMode>
)
