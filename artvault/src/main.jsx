import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Elements} from '@stripe/react-stripe-js'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import App from './App.jsx'
import { store,persistor} from './store/store.js'
import { stripePromise } from './utilities/stripe/stripe.utils.js'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
