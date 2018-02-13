import React from 'react'
import './index.css'



export class Menu extends React.Component {
  constructor(props) {
    super()
    this.readFile = this.readFile.bind(this)
  }
  render() {
    const button = (click, title, icon) => <div>
      <button title={title} className="button float--left" onClick={click}>
        {icon}
      </button>
    </div>
    const buttons = [
      button(this.props.onNew, 'New', <Icon />),
      button(this.props.onUndo, 'Undo', <UndoIcon />),
      button(this.props.onRedo, 'Redo', <RedoIcon />),
      button(this.props.onSave, 'Save', <SaveIcon />),
      button(this.props.onClear, 'Clear', <ClearIcon />),
    ]
    //https://www.reddit.com/r/reactjs/comments/5dttlm/how_do_i_upload_files_with_the_current_version_of/
    let formData = new FormData();
    return <div className="menu">
      <div className="input__container">
        <label className="input__label">Title</label>
        <input
          defaultValue={this.props.diagram.getTitle()}
          onChange={this.props.onTitle}
          value={this.props.diagram.getTitle()}
          className="input"
          type="textbox"
        />
      </div>
      
      <div>
        <input
          className="button float--left"
          type="file"
          name="file"
          ref={(el) => this.fileInput = el}
          onChange={(e) => this.readFile(e)}
          onClick={(e) => {e.target.value = null}}
        />
      </div>
      {buttons.map((item) => item)}
      <div>
        <input
          type="color"
          onChange={this.props.onColorChange}
        />
        <input
          type="color"
          onChange={this.props.onSelectedColorChange}
        />
      </div>
    </div>
  }

  readFile(e) {
    console.log('e', e)
    const files = this.fileInput.files
    console.log('files', files)
    const reader = new FileReader();
    console.log("this.onLoad", this.props.onLoad)
    reader.onload = ((loadFunction) => function(progressEvent) {
      //console.log('this.result', this.result)
      loadFunction(this.result)
    })(this.props.onLoad)
    const x = reader.readAsText(files[0]);
    //console.log('x', x)

  }
}

const Icon = (props) => <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>

const RedoIcon = (props) => <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
</svg>

const SaveIcon = (props) => <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
</svg>

const UndoIcon = (props) => <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
</svg>

const ClearIcon = (props) => <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
