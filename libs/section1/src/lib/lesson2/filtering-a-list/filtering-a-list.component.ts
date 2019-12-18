import { Component, OnInit, OnDestroy } from '@angular/core';

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
  selector: 'forms-course-filtering-a-list',
  templateUrl: './filtering-a-list.component.html',
  styleUrls: ['./filtering-a-list.component.css']
})
export class FilteringAListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [
    { name: 'Create forms course', assignedTo: 'Zack' },
    { name: 'Build file cabinets', assignedTo: 'Zack' },
    { name: 'Run all of Nrwl', assignedTo: 'Jeff' },
    { name: 'Create ground-breaking tech', assignedTo: 'Victor' },
    { name: 'make all the $$$', assignedTo: null }
  ];
  filteredTasks: Task[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
