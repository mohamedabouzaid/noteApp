
const fs=require('fs');
const { title } = require('process');
/*const note=function(){
    return "note..";
}*/
//add note
const addNote=(title,body)=>{
const note=loadNote();
const duplicateTitle=note.filter((item)=> item.title===title)

if(duplicateTitle.length==0){
    note.push({
        title:title,
        body:body
    })
     saveNote(note)
     console.log("added successful");
}
else{
    console.log("title is taken");
}




}
//delete note
deleteNote=(title)=>{
    var note=loadNote()
    filtarNote=note.filter((item)=>item.title!==title)
    if(filtarNote.length==note.length){
        console.log("no find title");
    }
    else{
        saveNote(filtarNote) ; 
        console.log("removed successful");
    }
   
}
//list note
listNote=()=>{
    note=loadNote()
    note.forEach(element => {
        console.log(element.title)
    });
}
//read note by title
readNote=(title)=>{
  
 const note=loadNote()
  const  filteNOTE=note.find((item)=> item.title==title )

  if(!filteNOTE){
  console.log("no note find ");

  }
  else{
      console.log( filteNOTE.body);
  }

}
//read notes from json
loadNote=()=>{
var bufferData=fs.readFileSync('note.json')
var dataJson=bufferData.toString()
return JSON.parse(dataJson)
}
//save notes
saveNote=(note)=>{
   
 var noteJson=JSON.stringify(note)
 fs.writeFileSync('note.json',noteJson);
}
module.exports={
    addNote:addNote,
    deleteNote:deleteNote,
    listNote:listNote,
    readNote:readNote
};