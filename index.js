const note=require('./note.js');

const yargs = require('yargs');
const { argv } = require('yargs');
yargs.version('1.1.0')
//console.log(note());
//console.log(process.argv[2]);



    yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder:{
              title:{
                describe:"title of node",
                demandOption: true,
                type:'string'
                
              },
              body:{
                describe:"body of node",
                demandOption: true,
                type:'string'
                
              }
            
        },
        handler: function (argv) {
            note.addNote(argv.title,argv.body)
       // console.log('title :'+argv.title);
       // console.log('body :'+argv.body)
        }
        })














    yargs.command({
        command: 'remove',
        describe: 'remove note',
        builder:{
              title:{
                describe:"title of node",
                demandOption: true,
                type:'string'
                
              },
            
        },
        handler: function (argv) {
          note.deleteNote(argv.title)
           // note.addNote(argv.title,argv.body)
       // console.log('title :'+argv.title);
       // console.log('body :'+argv.body)
        }
        })


        yargs.command({
          command: 'list',
          describe: 'list note',
          handler: function () {
            note.listNote();
             // note.addNote(argv.title,argv.body)
         // console.log('title :'+argv.title);
         // console.log('body :'+argv.body)
          }
          })
  
          yargs.command({
            command: 'read',
            describe: 'read note',
            builder:{
              title:{
                describe:"title of node",
                demandOption: true,
                type:'string'
                
              },
            
        },
            handler: function () {
              note.readNote(argv.title);
               // note.addNote(argv.title,argv.body)
           // console.log('title :'+argv.title);
           // console.log('body :'+argv.body)
            }
            })
  
  
  
  
  
  
  











  yargs.parse();
//    console.log(yargs.argv);
