import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: any = {};

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService.getQuote().subscribe((data) => {
      this.quote = data;
    });
  }
}
