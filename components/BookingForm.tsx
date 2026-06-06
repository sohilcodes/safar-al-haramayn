"use client";

import { useTransition } from "react";
import { createBooking } from "@/app/actions/bookings";

export default function BookingForm({
  packageId,
}: {
  packageId: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        startTransition(() => {
          createBooking(formData);
        });
      }}
      className="space-y-4 mt-10"
    >
      <input type="hidden" name="package_id" value={packageId} />

      <input
        name="full_name"
        placeholder="Full Name"
        className="border p-3 w-full rounded"
        required
      />

      <input
        name="email"
        placeholder="Email"
        className="border p-3 w-full rounded"
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        className="border p-3 w-full rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        className="border p-3 w-full rounded"
      />

      <button
        disabled={isPending}
        className="bg-[#0B6B3A] text-white px-6 py-3 rounded w-full"
      >
        {isPending ? "Submitting..." : "Book Now"}
      </button>
    </form>
  );
}
