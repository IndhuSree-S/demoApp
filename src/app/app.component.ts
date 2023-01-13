import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoApp';
  Onclick(x:any){
    console.log(x.emailid);
    console.log(x.passwd);
  }
  }
