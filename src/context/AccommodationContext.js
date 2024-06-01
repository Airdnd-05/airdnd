'use client'

import React, { createContext, useContext } from 'react'

const AccommodationContext = createContext(0)

export const AccommodationProvider = ({ id, children }) => (
  <AccommodationContext.Provider value={id}>{children}</AccommodationContext.Provider>
)

export const useAccommodationId = () => useContext(AccommodationContext)
