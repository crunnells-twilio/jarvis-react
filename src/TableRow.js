const TableRow = ({data}) => {
    return (
        <tr>
            <td>{data.key}</td>
            <td>{data.value}</td>
        </tr>
    )
}

export default TableRow;