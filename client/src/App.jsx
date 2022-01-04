import { Navbar, Welcome, Looader, Footer, Services, Transactions } from "./componets";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
