import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ) {}

  async executeSeed() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=650')
      .then(res => res.json())
      .then(data => data as PokeResponse);

    for (const pokemon of response.results) {
      const segments = pokemon.url.split('/');
      const no = +segments[segments.length - 2];

      this.pokemonModel.create({ name: pokemon.name, no });
    }

    return 'SEED execute successfully';
  }
}
