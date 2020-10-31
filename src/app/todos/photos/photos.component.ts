import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'dnt-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  total= 0;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getPhotos().subscribe(res => {
      switch(res.type) {
        case HttpEventType.Sent: {
          console.log('The request is sent to the server');
          break;
        }
        case HttpEventType.ResponseHeader: {
          if(res.status === 200) {
            console.log('Your request is being processed');
          }
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.total +=res.loaded;
          console.log(this.total);
          break;
        }
        case HttpEventType.Response: {
          console.log(res.body);
        }
      }
    });
  }

}
