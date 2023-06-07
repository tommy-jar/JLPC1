import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent  implements OnInit{


  constructor(public route : ActivatedRoute){}

  ngOnInit(): void {


  }


}
