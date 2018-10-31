import React from 'react';

function ToDoElement(props){
    return(
        <div key={props.id}> { props.text }
            <button
                onClick={ props.onDoneClick }
            >
                { props.doneText }
            </button>
            <button
                onClick={ props.onDeleteClick }
            >
                { props.deleteText }
            </button>
        </div>
    );
}

export default ToDoElement;