import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { completeItem, listItems, deleteItem } from "../actions/listActions"
// import Style from ".../styles/style.css"

export default function(props) {
  function del(id) {
    dispatch(deleteItem(id))
  }
  useEffect(() => {
    dispatch(listItems())
  }, [])

  const dispatch = useDispatch()

  function complete(id, status) {
    dispatch(completeItem(id, status))
  }

  const items = useSelector(appState => appState.listReducer.items)
  return (
    <div className="Main">
      {/* <h1>To-Dos</h1> */}

      <ul className="listContainer">
        {items.map((item, i) => (
          <div key={"item" + i}>
            <li className="containList">
              <div
                id="word"
                className={item.active === false ? "complete" : "checked"}
                onClick={e => complete(item.id, item.active)}
              >
                {item.name}
              </div>
              <button className="delete" onClick={e => del(item.id)}>
                X
              </button>
            </li>
          </div>
        ))}
        <p> Items Count: {items.length}</p>
      </ul>
    </div>
  )
}
