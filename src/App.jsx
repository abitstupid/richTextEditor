import { useState } from "react";
import "./App.css";
import RichTextEditor from "./components/richTextEditor/RichTextEditor";

export default function App() {
	const [name, setName] = useState("");
	return (
		<div className="editorContainer">
			<RichTextEditor
				value={name}
				onChange={setName}
			/>
		</div>
	);
}
