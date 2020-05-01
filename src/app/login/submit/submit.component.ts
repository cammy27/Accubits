import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  constructor(private router: Router) { }

  route($event){
    this.router.navigate(['/home']);
  }
 
  ngOnInit() {
  }

}
