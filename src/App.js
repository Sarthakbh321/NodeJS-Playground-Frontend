import React from 'react';
import './App.css';
import Particles from "react-particles-js";

function App() {
	return (
		<Particles width="100vw" height="100vh" params={{
			"particles": {
				"number": {
					"value": 160,
					"density": {
						"enable": false
					}
				},
				"color": {
					"value": "#000000",
				},
				"size": {
					"value": 10,
					"random": true
				},
				"move": {
					"direction": "bottom",
					"out_mode": "out"
				},
				"line_linked": {
					"enable": false
				}
			},
			"interactivity": {
				"events": {
					"onclick": {
						"enable": true,
						"mode": "remove"
					}
				},
				"modes": {
					"remove": {
						"particles_nb": 10
					}
				}
			}
		}} />
	);
}

export default App;
