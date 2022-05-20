import React from 'react'
import { Navbar, Services, Loader, Transaction, Welcome, Footer } from './component/index'
const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transaction />
        <Footer />
      </div>
    </>
  )
}

export default App