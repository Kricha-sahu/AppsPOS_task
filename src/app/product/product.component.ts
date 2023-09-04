import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  mst_product_id: string = '';
  branch_id: string = '';
  is_for_repeat_set_combo: boolean = false;
  awesomeBeginnings: boolean = false;
  awesomeBeginnings2: boolean = false;
  coldBrew: boolean = false;
  bostonLobster: boolean = false;
  ice: boolean = false;
  oil: boolean = false;
  spicy: boolean = false;
  mexicanSet: boolean = false;
  
  showMenu: boolean = false;
  selectedItems: string[] =[];

  constructor(private http: HttpClient, private router:Router ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const apiurl = 'http://appspos.apdeliver.com/AppsPOSDemoSAS/api/apis/Get_Category_By_ProductId';
    const requestData = {
      "api_key": "BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=",
      "language_code": "en",
      "device_id": "2CEC3804-46E6-4803-8982-88CFFCD402DD",
      "device_token": "ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj",
      "device_type": "android",
      "mst_product_id": this.mst_product_id,
      "branch_id": this.branch_id,
      "price_type": 1,
      "dishtype_id": "0",
      "is_for_repeat_set_combo": 1

    }

    this.http.post(apiurl, requestData).subscribe((response: any) => {
      this.showMenu=true;
      console.log(response);


    })
  }

  showSelectedItem():void{
    this.selectedItems=[];
    if(this.awesomeBeginnings){
      this.selectedItems.push("Awesome Beginnings");
    }
    if(this.awesomeBeginnings2){
      this.selectedItems.push("Awesome Beginnings 2");
    }
    if(this.coldBrew){
      this.selectedItems.push("(cold Brew) Gryphon Earl Grey Lavender Strawberry");
    }
    if(this.bostonLobster){
      this.selectedItems.push("Steamed Boston Lobster with Minced Garlic");
    }
    if(this.ice){
      this.selectedItems.push("Less Ice");
    }
    if(this.oil){
      this.selectedItems.push("Less Oil");
    }
    if(this.spicy){
      this.selectedItems.push("Less Spicy");
    }
    if(this.mexicanSet){
      this.selectedItems.push(" Mexican Set");
    }

    this.router.navigate(['/results'], {queryParams:{selected:this.selectedItems}});
  }

}
