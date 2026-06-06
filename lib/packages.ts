import { supabase } from "./supabase";

export async function getLatestPackages(limit = 3) {
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) return [];
  return data;
}

export async function getPackagesByType(type: string, limit = 3) {
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq("is_active", true)
    .eq("type", type)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) return [];
  return data;
}
