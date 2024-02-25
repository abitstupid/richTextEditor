import PropTypes from "prop-types";
import { useRef } from "react";
import Toolbar from "../toolbar/Toolbar";
import styles from "./RichTextEditor.module.scss";

export default function RichTextEditor(props) {
	const { name, onChange } = props;
	const defaultValue = useRef(name);
	const richTextEditorRef = useRef(null);
	// const [content, setContent]  useState("");

	function handleContentChange(e) {
		if (onChange) {
			onChange(e.target.innerHTML);
		}
	}

	return (
		<>
			<section className={`${styles.richTextEditorWrapper}`}>
				<Toolbar />
				<div
					className={`${styles.richTextEditor}`}
					ref={richTextEditorRef}
					onInput={handleContentChange}
					contentEditable
					dir="ltr"
					dangerouslySetInnerHTML={{ __html: defaultValue.current }}
				></div>

				{/* <section className={`${styles.richTextEditorWrapper}`}>
				<Toolbar />
				<div
					className={`${styles.richTextEditor}`}
					ref={richTextEditorRef}
					onInput={handleContentChange}
					contentEditable
					dir="ltr"
					dangerouslySetInnerHTML={{ __html: defaultValue.current }}
				></div> */}
			</section>
		</>
	);
}

RichTextEditor.propTypes = {
	name: PropTypes.any.isRequired,
	onChange: PropTypes.any.isRequired,
};
