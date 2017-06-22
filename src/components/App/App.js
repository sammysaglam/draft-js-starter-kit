import React from 'react';
import {Editor , EditorState , RichUtils} from 'draft-js';

export default class DraftApp extends React.Component {
	constructor() {
		super();
		this.state    = {
			editorState:EditorState.createEmpty()
		}
		this.focus    = () => {
			this.refs.editor.focus();
			this.onChange(this.state.editorState);
			this.handleKeyCommand = this.handleKeyCommand.bind(this);
		}
		this.onChange = this.onChange.bind(this);
	};

	onChange(editorState) {
		this.setState({editorState});
	}

	handleKeyCommand(command) {
		const newState = RichUtils.handleKeyCommand(this.state.editorState , command);
		if ( newState ) {
			this.onChange(newState);
			return 'handled';
		}
		return 'not-handled';
	}

	render() {

		return (
			<div onClick={this.focus} ref="container">
				<Editor
					editorState={this.state.editorState}
					onChange={this.onChange}
					handleKeyCommand={this.handleKeyCommand}
					placeholder="Type some text... I am a Draft.js editor!"
					ref="editor"
				/>
			</div>
		);
	}
}