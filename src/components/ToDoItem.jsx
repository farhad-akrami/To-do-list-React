import React from "react";

function ToDoItem(props) {
  return (
    <div
      onDoubleClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li contentEditable="true" spellCheck="false">{props.text}</li>
    </div>
  );
}

export default ToDoItem;
