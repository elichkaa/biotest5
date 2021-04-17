import logo from "./logo.svg";
import "./App.css";
import Presentation1 from "./presentations/Presentation1";
import Presentation2 from "./presentations/Presentation2";
import Presentation3 from "./presentations/Presentation3";
import Presentation4 from "./presentations/Presentation4";
import Presentation5 from "./presentations/Presentation5";
import Presentation6 from "./presentations/Presentation6";
import Presentation7 from "./presentations/Presentation7";

function App() {
	return (
		<div className="App">
			<h1>Biotest pri vikito 5</h1>
			<h3>hora, kak beshe shortcuta za tursene?</h3>
			<h3>ctrl + f hora!</h3>
			<Presentation1></Presentation1>
			<Presentation2></Presentation2>
			<Presentation3></Presentation3>
			<Presentation4></Presentation4>
			<Presentation5></Presentation5>
			<Presentation6></Presentation6>
			<Presentation7></Presentation7>
		</div>
	);
}

export default App;
