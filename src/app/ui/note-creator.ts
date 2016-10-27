import { Component, Output, EventEmitter } from '@angular/core';
import { ColorPicker } from './color-picker'

@Component({
  selector: 'note-creator',
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
  `],
  template: `
    <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
      <form class="row" (submit)="onCreateNote()">
        <input
          type="text"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          class="col-xs-10 title"
          (focus)="toggle(true)"
        >
        <input
          type="text"
          [(ngModel)]="newNote.value"
          name="newNoteValue"
          placeholder="Take a note..."
          class="col-xs-10"
          *ngIf="fullForm"
        >
        <div class="actions col-xs-12 row between-xs">
          <div class="col-xs-3" *ngIf="fullForm">
            <color-picker (selected)="selectorColor($event)" [colors]="colors"></color-picker>
          </div>
          <button
            type="submit"
            class="btn-light"
            *ngIf="fullForm"
            >
            Done
          </button>
        </div>
      </form>
    </div>
  `
})
export class NoteCreator {
  @Output() createNote = new EventEmitter();
  colors: Array<string> = ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];

  newNote = {
    title: '',
    value: '',
    color: 'white'
  }

  fullForm: boolean = false;

  onCreateNote() {
    const {title, value, color} = this.newNote;

    if (title && value) {
      this.createNote.emit({title, value, color});
      this.reset();
    }
  }

  selectorColor(color: string) {
    this.newNote.color = color;
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    }
  }
}
