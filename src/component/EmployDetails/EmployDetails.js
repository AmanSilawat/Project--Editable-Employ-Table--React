import React, { useEffect, useMemo, useState } from 'react';
import EmployColumn from './EmployColumn';
import { useTable } from 'react-table';
import EditableCell from './EditableCell';

const defaultRowData = {
    firstName: '',
    lastName: '',
    dob: '',
    designation: '',
    empProfile: '',
    experience: '',
}

const EmployDetails = () => {
    // get columns
    const employColumn = useMemo(() => EmployColumn, []);

    // table data
    const [employData, setEmployData] = useState([
        {
            firstName: 'firstName dd',
            lastName: 'lastName dd',
            dob: '1994-12-12',
            designation: 'designation dd',
            empProfile: 'empProfile dd',
            experience: '2',
        },
        {
            firstName: 'firstName 22',
            lastName: 'lastName 22',
            dob: '2001-10-19',
            designation: 'designation 22',
            empProfile: 'empProfile 22',
            experience: '10',
        }]
    );

    // delete handler
    const handlerDelete = ({ rowIndex }) => {
        setEmployData((prevState) => (
            prevState.filter((_, index) => rowIndex !== index)
        ));
    }

    // cell data update handler
    const handlerUpdateCell = ({ columnId, rowIndex, value }) => {
        setEmployData(prevState => (
            prevState.map((row, index) => {
                if (rowIndex === index) {
                    return {
                        ...row,
                        [columnId]: value
                    }
                }
                return row;
            })
        ))
    }

    // add new row
    const handlerAddRow = () => {
        setEmployData(prevState => ([
            ...prevState,
            {
                ...defaultRowData
            }
        ]))
    }


    // create instance of table
    const empTable = useTable({
        columns: employColumn,
        data: employData,
        handlerDelete,
        handlerUpdateCell,
        defaultColumn: {
            Cell: EditableCell
        }
    })

    // extract table instance data
    const {
        getTableProps,
        headerGroups,
        getTableBodyProps,
        rows,
        prepareRow,
    } = empTable;

    useEffect(() => {
        // show default one row
        if (employData.length === 0) {
            setEmployData([{
                ...defaultRowData
            }])
        }
    }, [employData])


    return (
        <>
            <div style={{ overflowX: 'scroll' }}>
                <table {...getTableProps()} style={{ border: 'solid 1px gray' }} >

                    <thead>
                        {
                            headerGroups.map(headerGroups => (
                                <tr {...headerGroups.getHeaderGroupProps()}>
                                    {
                                        headerGroups.headers.map((column, i) => (
                                            <th
                                                {...column.getHeaderProps}
                                                key={column.id + i}
                                                style={{
                                                    borderBottom: 'solid 3px purple',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {column.render('Headers')}
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            rows.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} key={row.original.firstName + row.original.lastName + row.index}>
                                        {
                                            row.cells.map((cell, i) => (
                                                <td
                                                    {...cell.getCellProps()}
                                                    key={i}
                                                    style={{
                                                        padding: '10px',
                                                        border: 'solid 1px gray',
                                                    }}
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <button onClick={handlerAddRow}>Add Row</button>
        </>
    )
}

export default EmployDetails;
