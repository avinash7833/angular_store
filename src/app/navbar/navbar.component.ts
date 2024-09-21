import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarColor : string = "#2A55E5";
  currDate = new Date();
  // @Output() sendSearchEvent =new EventEmitter<any>();
  allproducts !: any;
  cart : number = 0;
  showDropdownVar :boolean = false;

  
  constructor(public dataHandler : DataHandlerService) { 
    this.allproducts=dataHandler.products
  }

  ngOnInit(): void {
  }

  checkBlue(){
    // console.log(this.navbarColor === "#2A55E5");
    
    return this.navbarColor === "#2A55E5";
  }

  checkDark(){
    // console.log(this.navbarColor === "gray");
    return this.navbarColor === "gray";
  }

  onClickToggle(){
    // console.log("check");
    
    if(this.navbarColor === "#2A55E5"){
      this.navbarColor =  "gray";
    }else{
      this.navbarColor = "#2A55E5";
    }
  }

  OnSearch(event : any){
    const typedvalue =event.target.value;
    // this.sendSearchEvent.emit(typedvalue);
    this.dataHandler.products=this.allproducts.filter((product : any)=>{
    return product.name.includes(typedvalue);
  
  })
  }

  showDropdown(){
    this.showDropdownVar =!this.showDropdownVar
  }
  


}
