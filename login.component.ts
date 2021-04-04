import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PeronDataService} from '../../service/peron-data.service'
import {PERSON} from '../../model/emp.type'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private personData: PeronDataService) { }
  persondetails: PERSON[] = []
  
  ngOnInit(): void {
    this.personData.getPerson().subscribe((data: any) => {
      this.persondetails = data
    })
  }

  // match the email Id and password
  checkLog(email: string, password: string) {
    for (let per in this.persondetails) {
      if (this.persondetails[per].email == email && this.persondetails[per].password == password) {
         
        this.router.navigate(['/userWindow', this.persondetails[per]._id])
        
      }
      else {
        alert("please enter valid details")
      }
    }
  }

  
  
}
