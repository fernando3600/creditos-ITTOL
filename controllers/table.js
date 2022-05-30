'use strict'

let getTableView = (req, res) => {
    res.sendFile('desing/table.html', { root: __dirname });
}

let getAdvancedTableView = (req, res) => {
    res.sendFile('desing/tableAdvanced.html', { root: __dirname });
}

module.exports = {
    getTableView,
    getAdvancedTableView
}