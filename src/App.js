import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

function App() {
	const [html, setHtml] = useState("");
	const [css, setCss] = useState("");
	const [js, setJs] = useState("");
	const [srcDoc, setSrcDoc] = useState("");

	useEffect(() => {
		let timeout = setTimeout(
			() =>
				setSrcDoc(`
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
    `),
			500
		);

		return () => clearTimeout(timeout);
	}, [html, css, js]);

	return (
		<div className='container'>
			<div className='pane pane-code'>
				<Editor value={html} displayName='HTML' language='xml' onChange={setHtml} />
				<Editor value={css} displayName='CSS' language='css' onChange={setCss} />
				<Editor value={js} displayName='JS' language='javascript' onChange={setJs} />
			</div>
			<div className='pane pane-output'>
				<iframe srcDoc={srcDoc} title='Output' sandbox='allow-scripts' height='100%' width='100%' />
			</div>
		</div>
	);
}

export default App;
