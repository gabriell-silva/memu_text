const yargs = require('yargs');
const notes = require ('./notes_service');

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'The note title',
      demandOption: true,
      type: 'string'
    },
    content: {
      describe: 'The note content',
      demandOption: true,
      type: 'string'
    }
  },
  handler: notes.insert
})

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'The note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler ({title})  {notes.remove(title)}
})

yargs.command({
  command: 'list',
  describe: 'list notes',
  handler: () => {
    notes.list()
  }
})

yargs.command({
  command: 'find',
  describe: 'find notes',
  builder: {
    title: {
      describe: 'The note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({title}) => {notes.search(title)}
})

yargs.parse()