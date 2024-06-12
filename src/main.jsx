import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import ElDatoApp from './ElDatoApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ElDatoApp />
    </BrowserRouter>
  </React.StrictMode>
)
