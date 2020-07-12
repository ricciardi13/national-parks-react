import React from 'react'

export default React.createContext({
    parks: [],
    loading: false,
    error: null,
    parkSearch: () => {},
})