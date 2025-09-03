function Table({data, config, keyFn}) {

    const renderedData = data.map((row) => {
        const renderedRows = config.map((column) => {
            return <td key={column.label}>{column.render(row)}</td>
        });

        return <tr key={keyFn(row)}>{renderedRows}</tr>;
    });

    const renderedHeading = config.map((column) => {
        return <td key={column.label}>{column.label}</td>
    });

    return (
        <table>
            <thead>
                <tr>
                    {renderedHeading}
                </tr>
            </thead>
            <tbody>
                {renderedData}
            </tbody>
        </table>
    )
}

export default Table
