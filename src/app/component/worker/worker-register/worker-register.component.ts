import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Worker } from 'src/app/model/worker';
import { WorkerService } from 'src/app/service/worker.service';

@Component({
  selector: 'app-worker-register',
  templateUrl: './worker-register.component.html',
  styleUrls: ['./worker-register.component.css']
})
export class WorkerRegisterComponent implements OnInit {

  constructor(
    private workerService : WorkerService,
  ){

  }
  ngOnInit(): void {

    this.form = new FormGroup({
      id: new FormControl(),
      nameWorker: new FormControl(),
      percievedAmount: new FormControl(),
      fiscalYear: new FormControl(),
      rate:new FormControl()
    });
  }

  form : FormGroup = new FormGroup({});
  worker: Worker = new Worker();
  id : number = 0;
  nameWorker: string ="";
  percievedAmount : number = 0;
  fiscalYear : number= 0;
  rate: number = 0;

  aceptar(): void{
    this.worker.nameWorker = this.form.value['nameWorker'];
    this.worker.percievedAmount = this.form.value['percievedAmount'];
    this.worker.fiscalYear = this.form.value['fiscalYear'];
    this.worker.rate = this.form.value['rate'];

    this.workerService.register(this.worker).subscribe((data) =>
    {
      this.form.reset();
    })
  }
}
