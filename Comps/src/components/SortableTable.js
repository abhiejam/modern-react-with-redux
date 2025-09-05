import { useState } from 'react';
import Table from './Table'

function SortableTable(props) {
    const [sortBy, setSortBy] = useState(null); // asc, desc, null
    const [sortOrder, setSortOrder] = useState(null); // column name to sort

    const { config, data } = props;

    const handleClick = (label) => {
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        }
        else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const updatedConfig = config.map((column) => {
        if (column.sortValue) {
            return {
                ...column, 
                header:() =>  <th 
                    onClick={() => handleClick(column.label)}> 
                    {column.label}
                    </th>
            };
        }
        return column;
    });

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue }= config.find((column) => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            }
            return (valueA - valueB) * reverseOrder;
        });
    }

    return (
        <div>
            {sortBy} - {sortOrder}
        <Table {...props} data={sortedData} config={updatedConfig}/>
        </div>
    )
}

export default SortableTable
