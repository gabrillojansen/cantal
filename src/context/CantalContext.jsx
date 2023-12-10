import React, { createContext } from 'react'
import CARS from '../data/CARS'

export const CantalContext = createContext(null);

export const CantalProvider = (props) => {
    const CantalContextValue = {CARS}

  return (
    <div>
      <CantalContext.Provider value={CantalContextValue}>
        { props.children }
      </CantalContext.Provider>
    </div>
  )
}
