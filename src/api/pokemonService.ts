import apiClient from './apiClient';
import axios from 'axios';
const pokemonSevice = {
  getPokemonTypes: async () => await apiClient.get('type'),
  searchPokemons: async (string: string) =>
    await apiClient.get(`pokemon/${string}`),
  getPokemonsList: async (limit: number, offset: number) =>
    await apiClient.get(`pokemon?limit=${limit}&offset=${offset}`),
  getDataByUrl: async (url: string) => await axios.get(url),
};

export default pokemonSevice;
