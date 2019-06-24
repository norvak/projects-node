


const fs = require('fs');


let listToDone = [];

const saveDB = () => {

    let data = JSON.stringify(listToDone);

    fs.writeFile(`data-base/data.json`, data, (err) => {
        if ( err ) throw new Error('fail to save', err);
    });
}

const loadDB = () => {

    try {
        listToDone = require('../data-base/data.json');
    } catch (error) {
        listToDone = [ ];
    }
    
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

const list = () => {    
    loadDB();
    return listToDone;  
}

const update = (description, completed = true) => {
    loadDB();

    let index = listToDone.findIndex( task =>  task.description === description);

    if (index >= 0) {
        listToDone[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleted = (description) => {
    loadDB();

    let newList = listToDone.filter( task =>  task.description !== description );
       
    if (newList.length === listToDone.length) {
        return false;
    } else {
        listToDone = newList;
        saveDB();
        return true;        
    }
}

module.exports = {
    create,
    list,
    update,
    deleted
}

