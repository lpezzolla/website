import "./App.scss"
import {Col, Container, Row} from "react-bootstrap"

function App() {
    return (
        <div className='app'>
            <header className='d-flex flex-column flex-md-row justify-content-between px-5 py-3'>
                <h3 className='logo fw-bolder text-center text-md-start'>Luca Pezzolla</h3>
                <nav className='nav d-none d-md-flex '>
                    <a className='nav-link active' href='#'>Home</a>
                    <a className='nav-link' href='#'>Progetti</a>
                    <a className='nav-link' href='#'>Contatti</a>
                </nav>
            </header>

            <main role='main'>
                <Container>
                    <Row>
                        <Col>
                            <p>Hello world</p>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    )
}

export default App
