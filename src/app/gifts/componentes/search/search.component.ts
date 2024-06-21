import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../service/gifts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent {

  @ViewChild('search') searchGift!: ElementRef<HTMLInputElement>;

  constructor(private giftSer:GiftsService){
   
  }

  onSearch(event:any){
    let value: string = this.searchGift.nativeElement.value;
    if(value.length == 0) return;
    this.giftSer.addTag(value);
    this.searchGift.nativeElement.value = "";
  }
}
