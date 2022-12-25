import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

function App() {
	const [html, setHtml] = useState("");
	const [css, setCss] = useState("");
	const [js, setJs] = useState("");

	return (
		<div className='container'>
			<div className='pane pane-code'>
				<Editor value={html} displayName='HTML' language='xml' onChange={setHtml} />
				<Editor value={css} displayName='CSS' language='css' onChange={setCss} />
				<Editor value={js} displayName='JS' language='javascript' onChange={setJs} />
			</div>
			<div className='pane pane-output'>Output</div>
		</div>
	);
}

export default App;
