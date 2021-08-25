export interface IPokemon {
  id: number | string;
  name: string;
  height: number;
  weight: number;
  image_url: string;
  types: string[];
  abilities: string[];
}
