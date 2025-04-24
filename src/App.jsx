import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body"

function App() { 
  return (
    <>
    <div className="relative">
      <div className="main-wrapper font-poppins bg-primary pt-[20px] text-white">
        <Header/>
        <Body/>
        {/* <Footer/> */}
      </div> 
    </div>
    </>
  )
}

export default App