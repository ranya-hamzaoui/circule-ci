import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './../interfaces/task';
import { Product } from './../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlTask :string = 'http://localhost:4000/api/tasks';
  urlProduct: string = 'https://fakestoreapi.com/products'

  constructor(private http:HttpClient) { }

  getAlltasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.urlTask);
  }
  addtask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.urlTask,task);
  }
  deletetask(id:any) : Observable<Task> {
    return this.http.delete<Task>(this.urlTask+id);
  }
  updatetask(id:any, task:Task) : Observable<Task> {
    return this.http.put<Task>(this.urlTask+id,task);
  }
  
  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.urlProduct);
  }
  getOneProducts(id:number) : Observable<Product> {
    return this.http.get<Product>(this.urlProduct+'/'+id);
  }
}
