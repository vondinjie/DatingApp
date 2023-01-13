import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.http.get('https://localhost:7274/api/users').subscribe({
      next: Response => this.users = Response,
      error : Error => console.log(Error),
      complete: () => console.log('Requet has completed')

    })
  }
}