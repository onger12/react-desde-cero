import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstApp from './FirstApp'
import './css/styles.css'
import Counter from './components/Counter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp /> */}
    <Counter value={100} />
  </React.StrictMode>
)
