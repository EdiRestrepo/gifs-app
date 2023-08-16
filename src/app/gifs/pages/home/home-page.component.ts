import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Git } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private gifsService: GifsService){}

  get gifs(): Git[]{
    return this.gifsService.gifList;
  }

}
