import { Component } from '@angular/core';
import { product } from './product-list/product';
import { DataHandlerService } from './data-handler.service';
import { interval, observable, Observable, of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
  showspinner : boolean= true

  tempProducts !: any;
  
  onClickAddNewProduct(product:product){
    this.products.push(product)
  }
  products : product[] = [
    {
      image: "../../assets/images/iphone.jfif",
      name: "Iphone 15 pro max",
      description: "Lorem ipsum natus doloribus similique, unde animi labore, in suscipit quia vel assumenda pariatur porro praesentium, earum neque eius deserunt cum?",
      price: 100000,
      counts: "white",
      id: 0
    },
    {
      image: "../../assets/images/samsung.jpg",
      name: "Samsung S23 ultra",
      description: "Lorem ipsum consequatur natus doloribus simili, in suscipit quia vel assumenda pariatur porro praesentium, earum neque eius deserunt cum?",
      price: 90000,
      counts: "white",
      id: 0
    },
    {
      image: "../../assets/images/samsung.jpg",
      name: "Samsung S23 ultra",
      description: "Lorem ipsum consequatur natus doloribus simili, in suscipit quia vel assumenda pariatur porro praesentium, earum neque eius deserunt cum?",
      price: 90000,
      counts: "white",
      id: 0
    },
    {
      image: "../../assets/images/iphone.jfif",
      name: "Iphone 15 pro max",
      description: "Lorem ipsum natus doloribus similique, unde animi labore, in suscipit quia vel assumenda pariatur porro praesentium, earum neque eius deserunt cum?",
      price: 100000,
      counts: "white",
      id: 0
    },
    {
      image: "../../assets/images/iphone.jfif",
      name: "Iphone 15 pro max",
      description: "Lorem ipsum natus doloribus similique, unde animi labore, in suscipit quia vel assumenda pariatur porro praesentium, earum neque eius deserunt cum?",
      price: 100000,
      counts: "white",
      id: 0
    },
    ]
constructor(private http: HttpClient){

//   const obs = new Observable(observer=>{
//     // observer.next(1)
//     // observer.next(2)
//     // observer.next(3)
//     // observer.next(4)

//     // let counter = 0;
//     // setInterval(()=>{
//     //   observer.next(counter)
//     //   counter++
//     // },2000) 
//   })
//  obs.subscribe((num : any)=>{
//   console.log(num);
//  });
  
 
}

ngOnInit(){

  const getApiData = this.http.get('http://127.0.0.1:8000/');
  getApiData.subscribe((val)=>{
      console.log(val);
  })


  // const getApiData = this.http.get('https://api.escuelajs.co/api/v1/products');

  // getApiData.subscribe((val)=>{
  //   console.log(val);
    
  // })
  // const obs$ =new Observable(observer=>{
        // observer.next(1)
        // // throw new TypeError('Error message');
        // setTimeout(()=>{
        //   observer.next(2);
        // },5000)
        // observer.next(3);
        // observer.next(4);
        
        // setTimeout(()=>{
        //   observer.next(5);
        // },7000)
        // setTimeout(()=>{
        //   observer.next(6);
        // },4000)
        // setTimeout(()=>{
        //   observer.complete();
        // },6000)
      // });
      
  // const obs$ = of(1,2,3,4,5,6);

  // const squared$ = obs$.pipe(
  //   map((val)=>{
  //     return val**2;
  //   }),
  // )
  
  // squared$.subscribe(
  //   val => console.log(val),
  //   err => console.log("err = "+err),
  //   ()=>console.log("complete")
  // )

  // const filtered$ = squared$.pipe(
  //   filter((val)=>{
  //     return val % 2 === 0;
  //   })
  // )
  // filtered$.subscribe(
  //   val => console.log(val),
  //   err => console.log("err = "+err),
  //   ()=>console.log("complete")
  // )
  // obs$.subscribe(
  //   val => console.log(val),
  //   err => console.log("err = "+err),
  //   ()=>console.log("complete")
  // )

  // const newobs$ = obs$.pipe(
  //     map((val)=>{
  //       return val**2;
  //     }),
  //     filter((val)=>{
  //           return val % 2 === 0;
  //         })
  //   )
  // newobs$.subscribe(
  //   val => console.log(val),
  //   err => console.log("err = "+err),
  //   ()=>console.log("complete")
  // )

  const timeInterval$ =interval(1000);
  const newTimer$ = timeInterval$.pipe(
    take(2)
  );
  newTimer$.subscribe(
    val => console.log(val),
    err => console.log("err = "+err),
    ()=>this.showspinner = false
  )
  
}


filterProduct(typedValue :any){
  this.tempProducts = this.products.filter((product)=>{
    if(product.name.includes(typedValue)){
      return true
    }
    return false
  })
 }
    
}
