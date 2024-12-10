import { myNotes, saveToStorage } from "./myNotes.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

let date = dayjs().format('DD/MMM/YYYY');

let time = dayjs().format('H:mm:ss')

let generateId = parseInt(localStorage.getItem('count')) || 0;

export function noteDetails(){
  generateId ++;

  localStorage.setItem('count', generateId);

  let names = document.querySelector('.note-name');
  let noteName = names.value;

  let note = document.querySelector('.note');
  let notes = note.value;
  names.value = '';
  note.value = '';

  myNotes.push({noteName, notes, generateId, date, time});

  saveToStorage();
};

document.querySelector('.add').addEventListener('click', ()=>{
  noteDetails();
});