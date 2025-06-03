import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './App.jsx'
import { UserProvider } from './contexts/user.context.jsx'
import { ProductsProvider } from './contexts/products.context.jsx'

import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App/>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
