import Header from "./components/header"
import Footer from "./components/footer"
import Homepage from "./pages/Homepage"

function App() {
  return (
    <>
      <div className="relative">
        <div className="main-wrapper font-poppins bg-primary pt-[20px] text-white">
          <Header />
          <Homepage />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App