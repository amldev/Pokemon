export interface Pokemon {
    id: number;
    name: string;
    abilities: string[];
    img: string;
    types?: string[];
    peso?: number;
    altura?: number;
    descripcion?: string;
}