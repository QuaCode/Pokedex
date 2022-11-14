import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(private readonly pokemonService: PokemonService) {}

  async executeSeed() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=650')
      .then(res => res.json())
      .then(data => data as PokeResponse);

    const pokemons: CreatePokemonDto[] = [];
    response.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      pokemons.push({ name, no });
    });

    this.pokemonService.fillPokemonsWithSeedData(pokemons);

    return 'SEED execute successfully';
  }
}
