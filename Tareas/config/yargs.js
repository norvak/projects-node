


const argv = require('yargs')
                .command('create', 'create an item to make', {
                    description: {
                        demand: true,
                        alias: 'd',
                        desc: 'Description a task to be done'
                    }
                })
                .command('list', 'list all the tacks', {
                    description: {
                        demand: true,
                        alias: 'l',
                        desc: 'Description all task'
                    }
                })
                .command('update', 'update the completed status of a task', {
                    description: {
                        demand: true,
                        alias: 'd',
                        desc: 'Description all task'
                    },
                    complet: {
                        default: true,
                        alias: 'c',
                        desc: 'Description all task'
                    }
                })
                .help()
                .argv;

module.exports = {
    argv
}           