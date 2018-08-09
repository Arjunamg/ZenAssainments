import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  MenuItems = [
  {path:'home', text:'Home'},
  {path:'about', text:'About'},
  {path:'news', text:'News'},
  {path:'team', text:'Team'},
  {path:'contact', text:'Contact'}];

  MenuItems1 = ['home','about','news','team','contact']
}
