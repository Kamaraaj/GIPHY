import { createContext } from "react";

const GifCreateConext = createContext<any>(null);

import React from 'react'

const GifContext = ({children}:any) => {
  return (
    <GifCreateConext.Provider value="">
        {children}
    </GifCreateConext.Provider>
  )
}

export default GifContext