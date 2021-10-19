import React, { useState } from 'react'

const EditableCell = ({
    value: initialValue,
    row: { index: rowIndex },
    column: { id: columnId },
    handlerUpdateCell
}) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = () => {
        handlerUpdateCell({ columnId, rowIndex, value })
    }

    switch (columnId) {
        case 'dob':
            return (
                <div>
                    <input
                        type="date"
                        defaultValue={value}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                </div>
            )

        case 'experience':
            return (
                <div>
                    <input
                        type="number"
                        value={Number(value)}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                </div>
            )

        default:
            return (
                <div>
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                </div>
            )
    }
}

export default EditableCell
