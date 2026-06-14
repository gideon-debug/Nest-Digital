export interface Platform {
  platform: {
    id: number;
    name: string;
  };
}

export interface Genre {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  platforms: Platform[];
  released: string;
  price: number;
  genres?: Genre[];
  description_raw?: string;
}
