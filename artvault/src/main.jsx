import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './App.jsx'
import { store} from './store/store.js'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>,
)
