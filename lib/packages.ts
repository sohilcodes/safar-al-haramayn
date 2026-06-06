import { supabase } from "./supabase";

export async function getPackages() {
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq("is_active", true);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getPackageById(id: string) {
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
