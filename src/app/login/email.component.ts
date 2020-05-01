import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'email-user',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss']
  })

  export class EmailComponent
{
    @ViewChild('myInput',{static: false}) myInput: ElementRef;
    serverName: any;

    OnInput(event: any) {
        this.serverName = event.target.value;
        console.log(this.serverName);
        }


}