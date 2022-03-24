import {Col, Container, Row} from "react-bootstrap"

function ContactPage() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Ciao!</h1>
                    <p>Scrivimi su <a href='https://www.linkedin.com/in/lpezzolla/'>LinkedIn</a> o mandami una mail a: me (at) lucapezzolla.com</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage