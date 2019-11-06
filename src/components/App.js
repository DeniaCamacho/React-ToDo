import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import Main from "./Main"
import ItemForm from "./ItemForm"
import "../styles/Style.css"

function App(props) {
  return (
    <Provider store={store}>
      <div>
        <Main />
        <ItemForm />
      </div>
    </Provider>
  )
}

export default App
