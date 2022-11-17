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
    await this.pokemonModel.deleteMany({}); // Delete * from pokemons

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=650')
      .then(res => res.json())
      .then(data => data as PokeResponse);

    const seed = [];

    for (const pokemon of response.results) {
      const segments = pokemon.url.split('/');
      const no = +segments[segments.length - 2];
      seed.push({ name: pokemon.name, no });
    }

    await this.pokemonModel.insertMany(seed);

    return 'SEED execute successfully';
  }
}
