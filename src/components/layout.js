import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>hey footer</footer>
    </>
  )
}

export default Layout
