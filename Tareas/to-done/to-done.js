


const fs = require('fs');


let listToDone = [];

const saveDB = () => {

    let data = JSON.stringify(listToDone);

    fs.writeFile(`data-base/data.json`, data, (err) => {
        if ( err) throw new Error('fail to save', err);
    });
}

const loadDB = () => {
    listToDone = require('../data-base/data.json');
}

const create = (description) => {
    loadDB();
    let toDone = {
        description,
        completed: false
    };

    listToDone.push(toDone);
    saveDB();
    return toDone;
}

module.exports = {
    create
}

