import { Grid, RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource';

let initialGridLoad: boolean = true;

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    height: 315
});

grid.appendTo('#Grid');

grid.dataBound = () => {

    if (initialGridLoad) {

        initialGridLoad = false;

        var topElement;

        if (grid.allowGrouping || grid.toolbar) {
            topElement = grid.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                document.getElementsByClassName('e-toolbar');
        } else {
            topElement = document.getElementsByClassName('e-gridheader');
        }

        (topElement[0] as HTMLElement).style.backgroundColor = 'tomato';
        (topElement[0] as HTMLElement).style.padding = '10px';
    }
}
