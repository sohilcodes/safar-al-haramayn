"use server";

import { supabase } from "@/lib/supabase";

export async function createBooking(formData: FormData) {
  const full_name = formData.get("full_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const package_id = formData.get("package_id") as string;

  const { error } = await supabase.from("bookings").insert([
    {
      full_name,
      email,
      phone,
      message,
      package_id,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
}
