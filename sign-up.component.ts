import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Form, Validator } from '@angular/forms'
import { PeronDataService} from '../../service/peron-data.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private personDervice: PeronDataService) { }

  ngOnInit(): void {
  }
  onSubmit(ngForm: any) {
    this.personDervice.addPersonDetails(ngForm)
     this.router.navigate(['/login'])
    
  }

 
}
