// COMPONENTE MAIN

import React from 'react'
import ReactDOM from 'react-dom/client'   
import {App} from './App.jsx'

// DOM = DOCUMENT OBJECT MODEL 

// RECEBE O PARAMETRO DO ELEMENTO RAIZ TUDO COM O JS

// RENDER ESTÁ MOSTRANDO EM TELA UM ARQUIVO IMPORTADO
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,    
)