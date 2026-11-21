import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { About } from './about/about';
import { Header } from './header/header';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [Home, About, Header, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('taskflow');
}
