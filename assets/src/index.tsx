import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'

const rootEl = document.getElementById('root') as HTMLDivElement
const root = createRoot(rootEl)

root.render(<React.StrictMode>
  <App></App>
</React.StrictMode>)