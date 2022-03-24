import "./App.scss"
import {Link, Navigate, Route, Routes} from "react-router-dom"
import ContactPage from "./pages/ContactPage"
import {Download} from "lucide-react"
import usePageTracking from "./usePageTracking"

function App() {
    usePageTracking();

    return (
            <div className='app'>
                <header className='d-flex flex-column flex-md-row justify-content-between align-items-center px-5 py-3'>
                    <h3 className='logo text-center text-md-start'>Luca Pezzolla</h3>
                    {/*<nav className='nav d-none d-md-flex align-items-center justify-content-center'>
                        <Link to={"/"} className='nav-link active' href='#'>Home</Link>
                        <Link to={"/portfolio"} className='nav-link' href='#'>Portfolio</Link>
                        <Link to={"/contact"} className='nav-link'>Contatti</Link>
                        <a className='btn btn-sm btn-primary ms-4'><Download size={16}/>CV</a>
                    </nav>*/}
                </header>

                <main role='main'>
                    <Routes>
                        <Route exact path='/' element={<ContactPage/>}/>
                        {/*<Route exact path='/contact' element={<ContactPage/>}/>*/}
                        <Route path='*' element={<Navigate to='/' replace />} />
                    </Routes>
                </main>
            </div>
    )
}

export default App
