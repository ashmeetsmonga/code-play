import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

const Editor = ({ value, displayName, language, onChange }) => {
	const [open, setOpen] = useState(true);
	const handleChange = (editor, data, value) => onChange(value);

	return (
		<div className={`editor-container  ${open ? "" : "collapsed"}`}>
			<div className='editor-title'>
				<div>{displayName}</div>
				<div onClick={() => setOpen((prev) => !prev)} style={{ cursor: "pointer" }}>
					{open ? <FiMinimize2 /> : <FiMaximize2 />}
				</div>
			</div>
			<ControlledEditor
				onBeforeChange={handleChange}
				value={value}
				className='code-mirror-wrapper'
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					lineNumbers: true,
					theme: "material",
					lineNumbers: true,
				}}
			/>
		</div>
	);
};

export default Editor;
