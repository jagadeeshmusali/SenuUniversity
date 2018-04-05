import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    senu : {name : 'Senu p', picture:'assets/images/senu.jpg' },
    jaggu : {name : 'Jagadeesh Musali', picture:'assets/images/jaggu.jpg' },
    chalo : {name : 'c Musali', picture:'assets/images/jaggu.jpg' },
    kiran : {name : 'Kiran K', picture:'assets/images/kiran.jpg' },
    samanth : {name : 'Samanth', picture:'assets/images/samanth.jpg' },
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];
db:any;
  constructor(db: AngularFireDatabase) {
    // this.userArray = Object.values(this.users);
    this.db = db;
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getFireData(): Observable<any> {
    return this.db.list('/Professors').valueChanges();
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
