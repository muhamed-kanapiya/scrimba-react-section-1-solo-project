import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {
    return (
        <main>
            <Info />
            <div className="content">
            <About />
            <Interests />
            </div>
            <Footer />
        </main>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))