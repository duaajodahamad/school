import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-com',
  standalone: true,
  imports: [],
  templateUrl: './child-com.component.html',
  styleUrl: './child-com.component.css'
})
export class ChildComComponent {

  @Input() message:string = "";

  @Input() message2:string ="";
 
}
