import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import ReactGA from "react-ga4"
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <Router>
        <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)

function sendToAnalytics({id, name, value}) {
    ReactGA.event({
        category: "Web Vitals",
        action: name,
        value: Math.round(name === "CLS" ? value * 1000 : value),
        label: id,
        nonInteraction: true
    })
}

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(sendToAnalytics)
