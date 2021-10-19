import DeleteEmploy from './DeleteEmploy';

const employColumn = [
    {
        Headers: 'First Name',
        accessor: 'firstName',
    },
    {
        Headers: 'Last Name',
        accessor: 'lastName',
    },
    {
        Headers: 'DOB',
        accessor: 'dob',
    },
    {
        Headers: 'Designation',
        accessor: 'designation',
    },
    {
        Headers: 'User Profile',
        accessor: 'empProfile',
    },
    {
        Headers: 'Experience',
        accessor: 'experience',
    },
    {
        Headers: 'Delete',
        accessor: 'delete',
        Cell: DeleteEmploy
    },
]

export default employColumn;