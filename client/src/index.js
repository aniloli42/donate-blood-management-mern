import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import reducers from "./Reducers/index.js"

import App from "./App"

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
