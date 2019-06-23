

//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const toDone = require('./to-done/to-done');

let command = argv._[0];

switch( command) {

    case 'create':
            let task = toDone.create( argv.description );
            console.log(task);
           // console.log('Create by doing');
    break;

    case 'list':
            console.log('Show all tasks to be done');
    break;

    case 'update':
            console.log('Update a task to be done');
    break;

    default:
            console.log('Command is unknown');

}