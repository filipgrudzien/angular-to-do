import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {

  @Output() created = new EventEmitter<string>();
  creatorForm = new FormGroup({
    taskName: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor() { }

  ngOnInit() {
  }

  public emitTaskName(): void {
    this.created.emit(this.creatorForm.value.taskName);
  }

}
