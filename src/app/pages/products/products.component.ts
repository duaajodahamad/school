import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../../services/course-data.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers:[]
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  datasource:any;
  ngOnInit(): void {
    let products = this.http.get('https://fakestoreapi.com/products').subscribe(c=>{
      console.log('All Profucts:',c);
      this.datasource=c;
    });
    let a = this.sum();
    console.log(a); 
  }

  sum() {
    return 1 + 2;
  }
}
