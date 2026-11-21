import { Component, signal, computed , effect} from '@angular/core';

// 1. Définir l'interface
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})

export class TaskList {


  tasks = signal<Task[]>([
    { id: 1, title: 'Apprendre Angular', completed: false },
    { id: 2, title: 'Apprendre TypeScript', completed: true },
    { id: 3, title: 'Comprendre les Signals', completed: false }
  ]);

  newTask = signal('');

  addTask() {
  const title = this.newTask().trim();

  if (title) {
    const nom = this.new();
    
    this.tasks.update(tasks => [ ...tasks,{ id: 1, title, completed: false }]);

    this.newTask.set('');
  }
}

  completedCount = computed(() =>
    this.tasks().filter(task => task.completed).length
  );

  
  remainingCount = computed(() =>
    this.tasks().filter(task => !task.completed).length
  );

 
  markCompleted(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }


  resetTasks() {
    this.tasks.set([
      { id: 1, title: 'Apprendre Angular', completed: false },
      { id: 2, title: 'Apprendre TypeScript', completed: false },
      { id: 3, title: 'Comprendre les Signals', completed: false }
    ]);
  }
  constructor() {
  effect(() => {
    console.log('Nombre de tâches :', this.tasks().length);
  });
}
}