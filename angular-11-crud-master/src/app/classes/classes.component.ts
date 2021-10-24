import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { Classes } from '../classes';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

	constructor(private api: ApiService) { }

  Classes: Classes[] = [];
  search1: string;
  // constructor() { }
 

  ngOnInit(): void {
	this.api.getClasses().subscribe((data: Classes[]) => {
      this.Classes = data;
      console.log(this.Classes);

    })
  }
  search() {
    if (this.search1)
      return this.Classes.filter(p => (p.name.includes(this.search1)));
    else return this.Classes;
  }

  deleteClass(id) {
    this.api.deleteClass(id).subscribe(res => {
      this.Classes = this.Classes.filter(item => item.id !== id);

      console.log('Class deleted successfully!');
    })
  }

}