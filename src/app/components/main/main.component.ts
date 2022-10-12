import { Component, OnInit } from '@angular/core';
import { DealerService } from 'src/app/services/dealer.service';
import { Dealer, Deck } from 'src/app/Dealer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  dealers: Dealer[] = [];

  constructor(private dealerService: DealerService) { }

  ngOnInit(): void {
    this.dealerService.getDealers().subscribe(dealers => this.dealers = dealers)
  }



}
