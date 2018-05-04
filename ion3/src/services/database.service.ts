import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class Database {

  options: any = {
    name: 'data.db',
    location: 'default',
    createFromLocation: 1
  }

  private db: SQLiteObject;

  constructor(private sqlite: SQLite) {
  }
  
  public connectToDatabase() {
    
    return this.sqlite.create(this.options)
      .then((db: SQLiteObject) => {
        this.db = db;
      })
      .catch(e => {
        // handle error
      });
  }
}