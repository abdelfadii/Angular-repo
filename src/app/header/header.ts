import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = 'Task Manager';
  canDelete = false;
  rename(){
    this.title = 'Mes taches';
  }
  delete(){
    this.title= '';
  }
}
