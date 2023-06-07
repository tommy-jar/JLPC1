import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { WorkerService } from 'src/app/service/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit , AfterViewInit{

  constructor(private workerService : WorkerService){}

  ngOnInit(): void {
    this.workerService.list().subscribe(data => {
      this.dataSource.data = data;
    })

  }

  listWorker: Worker[]=[];
  displayedColumns = ['id', 'nameWorker', 'percievedAmount','fiscalYear', 'rate', 'total', 'accion01'];
  dataSource = new MatTableDataSource<Worker>();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  delt(id : any ){
     this.workerService.delet(id).subscribe(data => {
      this.workerService.list().subscribe(data => {
        this.dataSource.data = data;
      })
     })
  }

}


