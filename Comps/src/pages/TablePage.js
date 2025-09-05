import SortableTable from '../components/SortableTable';

function TablePage() {
    const tableData = [
        {name: 'Apple', color: 'red', score:13},
        {name: 'Oranges', color: 'orange', score:1},
        {name: 'Banana', color: 'yellow', score:3}
    ];

    const config = [
        {
            label : 'Test',
            render : (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => {fruit.color}
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        }

    ];

    const keyFn = (fruit) => {
        return fruit.name;
    }
    return (
        <div className='flex flex-row justify-center'>
            <SortableTable data={tableData} config={config} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage
