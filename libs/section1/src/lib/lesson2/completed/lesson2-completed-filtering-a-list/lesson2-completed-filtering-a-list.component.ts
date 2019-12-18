import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { tap, startWith, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

type Employee = 'Zack' | 'Jeff' | 'Victor';

interface Task {
  name: string;
  assignedTo: Employee | null;
}

interface FormValue {
  showOnlyUnassignedTickets: boolean;
  nameFilter: string;
}

const filterForUnassignedTickets = (
  task: Task,
  { showOnlyUnassignedTickets }: FormValue
): boolean => (showOnlyUnassignedTickets ? !task.assignedTo : true);

const filterByTaskName = (task: Task, { nameFilter }: FormValue): boolean =>
  nameFilter ? task.name.includes(nameFilter) : true;

@Component({
  selector: 'forms-course-lesson2-completed-filtering-a-list',
  templateUrl: './lesson2-completed-filtering-a-list.component.html',
  styleUrls: ['./lesson2-completed-filtering-a-list.component.css']
})
export class Lesson2CompletedFilteringAListComponent
  implements OnInit, OnDestroy {
  form = new FormGroup({
    showOnlyUnassignedTickets: new FormControl(false),
    nameFilter: new FormControl('')
  });
  tasks: Task[] = [
    { name: 'Create forms course', assignedTo: 'Zack' },
    { name: 'Build file cabinets', assignedTo: 'Zack' },
    { name: 'Run all of Nrwl', assignedTo: 'Jeff' },
    { name: 'Create ground-breaking tech', assignedTo: 'Victor' },
    { name: 'make all the $$$', assignedTo: null }
  ];
  filteredTasks: Task[] = [];
  private _destroying$ = new Subject<void>();

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        takeUntil(this._destroying$),
        startWith(this.form.value),
        tap(
          (value: FormValue) =>
            (this.filteredTasks = this.tasks
              .filter(task => filterForUnassignedTickets(task, value))
              .filter(task => filterByTaskName(task, value)))
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this._destroying$.next();
  }
}
