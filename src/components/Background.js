import React from "react";
import Particles from "react-particles-js";

function Background() {
	return (
		<div style={{position: "absolute", width: "100%", height: "100%"}}>
				<Particles params={{
					"particles": {
						"number": {
							"value": 200,
							"density": {
								"enable": false
							}
						},
						"color": {
							"value": "#ffffff",
						},
						"size": {
							"value": 5,
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
			</div>
	)
}

export default Background;