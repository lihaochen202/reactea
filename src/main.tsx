import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/index.css'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
