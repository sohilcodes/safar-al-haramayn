import { supabase } from "./supabase";

export async function getPackages(filters?: {
  city?: string;
  type?: string;
  search?: string;
}) {
  let query = supabase
    .from("packages")
    .select("*")
    .eq("is_active", true);

  if (filters?.city) {
    query = query.eq("departure_city", filters.city);
  }

  if (filters?.type) {
    query = query.eq("type", filters.type);
  }

  if (filters?.search) {
    query = query.ilike("title", `%${filters.search}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.log(error);
    return [];
  }

  return data;
}
