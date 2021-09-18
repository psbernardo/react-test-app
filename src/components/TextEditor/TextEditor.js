import React from 'react';
import { InputLabel } from '@material-ui/core';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

export default function TextEditor(props) {
  const buttons = [
    ['undo', 'redo'],
    ['font', 'fontSize', 'formatBlock'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['removeFormat'],
    ['fontColor', 'hiliteColor'],
    ['outdent', 'indent'],
    ['align', 'horizontalRule', 'list', 'table'],
    ['link', 'image'],
    ['showBlocks', 'preview', 'fullScreen'],
  ];

  const options = {
    height: 300,
    buttonList: buttons,
  };

  return (
    <>
      <InputLabel shrink style={{ marginBottom: 5 }} required={props.required}>
        {props.label}
      </InputLabel>
      <SunEditor
        showToolbar={props.showToolbar}
        setOptions={options}
        name={props.name}
        setContents={props.setContents}
        onChange={props.onChange}
        disable={props.disable}
      />
    </>
  );
}
