export let myNotes = JSON.parse(localStorage.getItem('note')) || [];

export function saveToStorage(){
  localStorage.setItem('note', JSON.stringify(myNotes));
};

export function removeFromStorage(indexId){
  let match =[];

  myNotes.forEach((note)=>{
    if(note.generateId != indexId){
      match.push(note);
    };
    myNotes = match;
  });

  saveToStorage();
}