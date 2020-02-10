/*global chrome*/
import React, { Button } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>

                {/* <Button
                    onClick={() => {
                        chrome.tabs.getCurrent(tab => {
                            chrome.tabs.update(tab.id, {
                                url: 'chrome-search://local-ntp/local-ntp.html'
                            })
                        })
                    }}
                >
                    Chrome Tab
                </Button> */}
            </header>
        </div>
    )
}

export default App
