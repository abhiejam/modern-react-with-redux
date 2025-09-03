import React from 'react'
import Table from '../components/Table'

function TablePage() {
    const tableData = [
        {name: 'Apple', color: 'red', score:1},
        {name: 'Banana', color: 'yellow', score:3},
        {name: 'Oranges', color: 'orange', score:4}
    ];

    const config = [
        {
            label : 'Test',
            render : (fruit) => fruit.name,
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`bg`}>{fruit.color}</div>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score
        }

    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }
    return (
        <div>
        <Table data={tableData} config={config} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage
