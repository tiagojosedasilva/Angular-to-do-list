import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{

  @Output() public emmitItemTask = new EventEmitter

  public addItemTaskList: string = "";

  constructor(){}
  ngOnInit(){}

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList){
      this.emmitItemTask.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
