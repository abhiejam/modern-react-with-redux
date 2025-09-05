import { Fragment } from "react";

function Table({data, config, keyFn}) {

    const renderedData = data.map((row) => {
        const renderedRows = config.map((column) => {
            return <td key={column.label}>{column.render(row)}</td>
        });

        return <tr key={keyFn(row)}>{renderedRows}</tr>;
    });

    const renderedHeading = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        
        return <th key={column.label}>{column.label}</th>
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
