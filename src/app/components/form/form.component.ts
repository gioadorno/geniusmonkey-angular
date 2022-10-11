import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DealerService } from 'src/app/services/dealer.service';
import { Dealer, Deck } from 'src/app/Dealer';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() dealer!: Dealer;
  @Input() id!: string;
  @Output() getDeck: EventEmitter<Deck> = new EventEmitter();

  public deck!: Deck[];

  dealers: Dealer[] = [];
  shuffle: string = 'shuffle';
  selected!: string


  constructor(private dealerService: DealerService) { }

  ngOnInit(): void {
    this.dealerService.getDealers().subscribe(dealers => this.dealers = dealers)
  }

  onChange(dealer: Dealer) {
    const id = this.id
    console.log(dealer)
    // this.changeID.emit(dealer)
  }

  onSubmit() {
      this.dealerService.getDeck().subscribe(deck => {
        console.log(deck)
        this.deck = deck
      })
  }

}
