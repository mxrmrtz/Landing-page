import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import './App.css';


function App() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 700);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="App">
			<div id="root">
				{isMobile ? (
					     <Spline scene="https://prod.spline.design/hNsuxtS7CEEvIXIP/scene.splinecode" />

						//  mobile
				) : (
					<Spline scene="https://prod.spline.design/Mlhvwmzx35qEwlfj/scene.splinecode" /> // desktop
				)}
			</div>
		</div>
	);
}

export default App;
