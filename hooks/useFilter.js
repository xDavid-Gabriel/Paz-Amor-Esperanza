import { useState } from 'react'

export const useFilter = (initialItems, initialActivo) => {
  const [items, setItems] = useState(initialItems)
  const [activo, setActivo] = useState(initialActivo)

  const filterItem = categItem => {
    const updatedItems = initialItems.filter(curElem => {
      return curElem.category === categItem
    })
    setItems(updatedItems)
  }

  return { items, activo, setActivo, filterItem }
}
