var jqGrid_selRowId;
var jqGridCommonConf = {
    datatype: "local",
    height: 478,
    // width : 1300,
    autowidth: true,
    autoheight: true,
    shrinkToFit: false,
    // autoScroll : true,
    rowNum: 100,
    rowTotal: 200,
    rowList: [20, 30, 50],
    loadonce: true,
    mtype: "GET",
    rownumbers: true,
    rownumWidth: 25,
    gridview: true,
    pager: '#jqGridPager',
    viewrecords: true,
    sortorder: "asc",
    ondblClickRow: function (rowid, iRow, iCol, e) {
        jqGrid_selRowId = rowid;
        onModBtn();
    }
};

var ajaxTimeOut = 30000;

function selectDataFormatter(data, value) {
    for (var i = 0; i < data.length; i++) {
        if (value == data[i].value) {
            return data[i].name;
        }
    }
}

function selectDataUnFormatter(data, name) {
    for (var i = 0; i < data.length; i++) {
        if (name == data[i].name) {
            return data[i].value;
        }
    }
}
