export interface Package {
  id: string;
  title: string;
  type: string;
  duration: string;
  departure_city: string;
  departure_code: string;
  description: string;
  price: number;
  original_price: number | null;
  discount_percent: number | null;
  image_url: string | null;
  is_active: boolean;
}
