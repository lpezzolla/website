import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import ReactGA from "react-ga4"

ReactGA.initialize("G-FX35BPVGYG");

ReactDOM.render(
    <React.StrictMode>
        <App/>
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
