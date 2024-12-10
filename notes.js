import{myNotes, removeFromStorage} from "./myNotes.js";

let noteHTML = document.querySelector('.all-saved');
let search = document.querySelector('.search-bar');

function sortNote(note){
  return `
    <div class="all-saved-notes">
      <div class="folder">
        <div class="name-date">
          <div class="the-name">${note.noteName}</div>
          <div class="spacer"></div>
          <div class="date-time">
            <div class="the-date">${note.date}</div>
            <div class="the-time">${note.time}</div>
          </div>
        </div>
    
        <div class="saved-note">
          <div class="note-area">${note.notes}</div>
        </div>
        <div class="del-div">
          <div class="spacer"></div>
          <button class="del" data-index-id="${note.generateId}">Delete</button>
        </div>
      </div>
    </div>
  `;
}

function noteSummary(){
  let savedHTML = '';

  myNotes.forEach((note)=>{
    let {noteName, notes, generateId, date, time} = note

    let added = `
      <div class="all-saved-notes">
        <div class="folder">
          <div class="name-date">
            <div class="the-name">${noteName}</div>
            <div class="spacer"></div>
            <div class="date-time">
              <div class="the-date">${date}</div>
              <div class="the-time">${time}</div>
            </div>
          </div>
      
          <div class="saved-note">
            <div class="note-area">${notes}</div>
          </div>
          <div class="del-div">
            <div class="spacer"></div>
            <button class="del" data-index-id="${generateId}">Delete</button>
          </div>
        </div>
      </div>
    `;
    savedHTML += added;
  });

  noteHTML.innerHTML = savedHTML;

  delNote();
};

function delNote(){
  document.querySelectorAll('.del').forEach((del)=>{
    del.addEventListener('click', ()=>{
      let indexId = del.dataset.indexId;

      removeFromStorage(indexId);
      noteSummary();
      search.value = '';
    });
  });
}

noteSummary();

search.addEventListener('input', ()=>{
  let searching = search.value.toLowerCase();

  noteHTML.innerHTML = '';

  myNotes.forEach((note)=>{
    if(note.noteName.toLowerCase().includes(searching)){
      noteHTML.innerHTML += sortNote(note);

      delNote();
    }
  })
})