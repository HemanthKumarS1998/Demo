define(["require", "exports", "@syncfusion/ej2-grids", "./datasource"], function (require, exports, ej2_grids_1, datasource_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var initialGridLoad = true;
    var grid = new ej2_grids_1.Grid({
        dataSource: datasource_1.data,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
            { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
        ],
        height: 315
    });
    grid.appendTo('#Grid');
    grid.dataBound = function () {
        if (initialGridLoad) {
            initialGridLoad = false;
            var topElement;
            if (grid.allowGrouping || grid.toolbar) {
                topElement = grid.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                    document.getElementsByClassName('e-toolbar');
            }
            else {
                topElement = document.getElementsByClassName('e-gridheader');
            }
            topElement[0].style.backgroundColor = 'tomato';
            topElement[0].style.padding = '10px';
        }
    };
});
//# sourceMappingURL=app.js.map