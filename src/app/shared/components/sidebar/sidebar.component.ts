import { Component } from '@angular/core';
import { GiftsService } from '../../../gifts/service/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {



  constructor(private giftSer:GiftsService){

  }

  get listHistory(){
    return this.giftSer.taskHistory;
  }

  onCLick(gift: string){

    this.giftSer.addTag(gift)
    
  }

}
