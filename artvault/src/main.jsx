import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './App.jsx'
import { CategoriesProvider } from './contexts/categories.context.jsx'
import { CartProvider } from './contexts/cart.context.jsx'
import { store } from './store/store.js'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
