import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

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
				{isMobile ? (
					<div className="spline-desktop">
						<Spline scene="https://prod.spline.design/hNsuxtS7CEEvIXIP/scene.splinecode" />
					</div>
				) : (
					<Spline scene="https://prod.spline.design/Mlhvwmzx35qEwlfj/scene.splinecode" />
				)}
			</div>
	);
}

export default App;
