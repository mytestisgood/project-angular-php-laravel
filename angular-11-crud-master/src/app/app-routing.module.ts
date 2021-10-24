import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesComponent } from './classes/classes.component';
import { ClassesViewComponent } from './classes-view/classes-view.component';
import { ClassesAddComponent } from './classes-add/classes-add.component';
import { ClassesEditComponent } from './classes-edit/classes-edit.component';



const routes: Routes = [
  {
    path: 'classes',
    component: ClassesComponent,
    data: { title: 'List of Classes' }
  },
  {
    path: 'classes-view/:id',
    component: ClassesViewComponent,
    data: { title: 'Class Details' }
  },
  {
    path: 'classes-add',
    component: ClassesAddComponent,
    data: { title: 'Add Class' }
  },
  {
    path: 'classes-edit/:id',
    component: ClassesEditComponent,
    data: { title: 'Edit Class' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
