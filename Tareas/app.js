

//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const toDone = require('./to-done/to-done');

let command = argv._[0];

switch( command) {

    case 'create':
            let task = toDone.create( argv.description );
            console.log(task);
        break;

    case 'listing':
            let listing = toDone.list(); 
            for (let list of listing) {
                console.log('###### TO DONE #######'.green);
                console.log(list.description);
                console.log('status: ', list.completed);
                console.log('######################'.green);    
            }   
        break;

    case 'update':
            let updating = toDone.update(argv.description, argv.completed);
            console.log(updating);
        break;

    case 'deleted':
            let deleting = toDone.deleted(argv.description);
            console.log(deleting);
        break;
        
    default:
            console.log('Command is unknown');

}