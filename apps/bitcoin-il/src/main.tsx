import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <Router basename={import.meta.env.BASE_URL}>
    <RecoilRoot>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RecoilRoot>
  </Router>,
  document.getElementById('root')
)
