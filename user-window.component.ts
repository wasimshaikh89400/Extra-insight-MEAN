import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Number } from 'mongoose';
import { PERSON } from 'src/app/model/emp.type';
import {PeronDataService} from '../../service/peron-data.service'

@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.css']
})
export class UserWindowComponent implements OnInit {

  constructor( private activatedRoutes : ActivatedRoute , private personData:PeronDataService) { }
  profile = false;
  content = false;
  updateBar = false
  public per_id: any
  persondetails: PERSON[] = []
  contentData:[] = []
  first_name = ""
  last_name = ""
  email = ""
  contact_no = ""
  password =""


  ngOnInit(): void {
    let id = this.activatedRoutes.snapshot.paramMap.get('per_id')
    this.per_id = id

    this.personData.getPerson().subscribe((data: any) =>{
    this.persondetails = data
    })
    
    this.personData.getContent().subscribe((data: any) =>{
    this.contentData = data
    })

  }

  //display profile
  dispProf()
  {
    this.profile = !this.profile
    for (let per in this.persondetails)
    {
      if (this.persondetails[per]._id == this.per_id) {

        this.first_name = this.persondetails[per].first_name
        this.last_name = this.persondetails[per].last_name
        this.email = this.persondetails[per].email
        this.contact_no = this.persondetails[per].contact_no
        this.password = this.persondetails[per].password

        
      }
    }
  }

  // show the update display for enter data
  updatedataBar() {
    this.updateBar =! this.updateBar
  }
  
  // update the user profile
  updatedata(updatedData: any) {
    this.personData.updatePersonDetails(updatedData)
  }

  //add content data

  onSubmitContent(contentData: any) {
      this.personData.addContentData(contentData)
  }

  // update existing content
  updateMyContent(cont: any) {
     this.personData.updateContain(cont)
  }

  //delete content

  deleteContent(id: any) {
    this.personData.deleteContent(id)
  }
}
