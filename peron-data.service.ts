import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { PERSON } from '../model/emp.type'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeronDataService {

  person: PERSON[] = [];
  

  constructor(private http: HttpClient) { }

  //get the persondata from server

  getPerson() {
     const httpHeader = new HttpHeaders({
    'content-type' : 'application/json'
   })
  return this.http.get('http://localhost:3000/api/personDetails',{ headers: httpHeader})
  }
  
  // post the person data
  addPersonDetails(newPerson : PERSON) {
   const httpHeader = new HttpHeaders({
    'content-type' : 'application/json'
   })    
    return this.http.post("http://localhost:3000/api/personDetail", newPerson, { headers: httpHeader })
    }

  updatePersonDetails(newPerson: PERSON) {
    const httpHeader = new HttpHeaders({
    'content-type' : 'application/json'
    })
      return this.http.put("http://localhost:3000/api/updateProfile", newPerson, { headers: httpHeader })

  }

  // Display content 
  getContent() {
     const httpHeader = new HttpHeaders({
    'content-type' : 'application/json'
   })
  return this.http.get('http://localhost:3000/api/contents',{ headers: httpHeader})
  }

  // add content data
  addContentData(contentData: any) {
     const httpHeader = new HttpHeaders({
    'content-type' : 'application/json'
   })    
    return this.http.post("http://localhost:3000/api/content", contentData, { headers: httpHeader })
      
  }

  // update conatain data
updateContain(updateContent: any){
    const httpHeader = new HttpHeaders({
    'content-type' : 'application/json'
    })
      return this.http.put("http://localhost:3000/api/updateContent" , updateContent , { headers: httpHeader })

}
  
  // delete content 

  deleteContent(_id: any) {
    return this.http.delete("http://localhost:3000/api/content/" + _id)
  }
}


