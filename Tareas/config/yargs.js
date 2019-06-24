
const description = {
    demand: true,
    alias: 'd',
    desc: 'Description a task to be done'
};

const complet = {
    default: true,
    alias: 'c',
    desc: 'Description all task'
}


const argv = require('yargs')
                .command('create', 'create an item to make', {
                    description
                })
                .command('list', 'list all the tacks', {
                    description
                })
                .command('update', 'update the completed status of a task', {
                    description,
                    complet
                })
                .command('deleted', 'deleted an task', {
                    description
                })
                .help()
                .argv;

module.exports = {
    argv
}           