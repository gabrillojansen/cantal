import React, { createContext } from 'react'
import CARS from '../data/CARS'
import blogData from '../data/blogData';

export const CantalContext = createContext(null);

export const CantalProvider = (props) => {
    const CantalContextValue = {CARS, blogData}

  return (
    <div>
      <CantalContext.Provider value={CantalContextValue}>
        { props.children }
      </CantalContext.Provider>
    </div>
  )
}
