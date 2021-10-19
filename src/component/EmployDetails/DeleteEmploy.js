import React from 'react'

const DeleteEmploy = ({ row: { index: rowIndex }, handlerDelete }) => {
    return (
        <button onClick={() => handlerDelete({ rowIndex })}>Delete</button>
    )
}

export default DeleteEmploy;
