import { Component, OnInit } from '@angular/core';
import { PokemonListServiceService } from '../service/pokemon-list-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor(public pokemonListService: PokemonListServiceService) { }

  ngOnInit() {
    this.pokemonListService.getPokemonList()
      .subscribe( data => console.log(data));
  }

}
