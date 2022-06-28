import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <RecoilRoot>
    <Router basename={import.meta.env.BASE_URL}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </RecoilRoot>,
  document.getElementById('root')
)
