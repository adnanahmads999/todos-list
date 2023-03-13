import React from 'react'

export const Footer = () => {
  let footerStyle={
    position: "relative",
    top: "80vh",
    width:"100%"
  }
  return (
    <footer className="bg-dark text-light my-3 py-1" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyToDosList.com</p>
    </footer>
  )
}
