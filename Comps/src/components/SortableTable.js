import Table from './Table';
import useSort from '../hooks/use-sort';

function SortableTable(props) {

    const { config, data } = props;
    const {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (column.sortValue) {
            return {
                ...column,
                header: () => <th
                    onClick={() => setSortColumn(column.label)}>
                    {column.label}
                </th>
            };
        }
        return column;
    });


    return (
        <div>
            {sortBy} - {sortOrder}
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    )
}

export default SortableTable
