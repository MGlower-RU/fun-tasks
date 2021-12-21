import React, { createContext, useState } from 'react';

export const MainContextComponent = createContext();

export default function MainContext(props) {
  const [isContextMenu, setIsContextMenu] = useState(false)

  return (
    <MainContextComponent.Provider
      value={{
        isContextMenu,
        setIsContextMenu
      }}
    >
      {props.children}
    </MainContextComponent.Provider>
  )
}