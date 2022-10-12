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
  // @Input() id!: string;
  @Output() getDeck: EventEmitter<Deck> = new EventEmitter();

  public deck!: Deck[];

  dealers: Dealer[] = [];
  shuffle: string = 'shuffle';
  id!: string;


  constructor(private dealerService: DealerService) { }

  ngOnInit(): void {

  }

  onChange(dealer: Dealer) {
    const id = this.id
    console.log(dealer)
    // this.changeID.emit(dealer)
  }


  onSubmit() {
      this.dealerService.getDealers().subscribe(dealers => {
        this.dealers = dealers;
        const dealer = dealers[0];
        this.dealerService.getDeck(dealer).subscribe(deck => this.deck = deck);
      })
  }

}
