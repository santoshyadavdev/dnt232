import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'dnt-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css']
})
export class TodosDetailsComponent implements OnInit {

  id: number;

  // id$ = this.route.paramMap.pipe(
  //   map((data) => +data.get('id'))
  // );

  constructor(private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => this.id = + data.get('id'));
    // this.id$.pipe((id) => {
    //   this.todoService.getTodoDetails(id)
    // });

    this.route.paramMap.subscribe((res) =>  console.log(res.keys));
    // this.route.queryParams.subscribe((res)=> console.log(res.keys));

    this.todoService.getTodoDetails(this.id).subscribe((res) => console.log(res));
  }

}
