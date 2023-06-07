import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerComponent } from './component/worker/worker.component';
import { WorkerRegisterComponent } from './component/worker/worker-register/worker-register.component';
import { WorkerListComponent } from './component/worker/worker-list/worker-list.component';

const routes: Routes = [
  {
    path:'workers', component: WorkerComponent, children:[
      {
        path:'register', component: WorkerRegisterComponent
      },
      {
        path:'list', component : WorkerListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
