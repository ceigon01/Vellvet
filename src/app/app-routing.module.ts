import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignerComponent } from './designer/designer.component';
import { RecorderComponent } from './recorder/recorder.component';

const routes: Routes = [
  { path: 'recorder', component: RecorderComponent },
  { path: 'designer', component: DesignerComponent },
  { path: '',   redirectTo: '/recorder', pathMatch: 'full' }, // redirect to `recorder`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
