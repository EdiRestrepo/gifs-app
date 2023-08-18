import { Component, Input, OnInit } from '@angular/core';
import { Git } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {

  @Input()
  // public gif?: Git;
  public gif!: Git;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required');
  }

}
