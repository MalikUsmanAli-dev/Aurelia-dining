import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import MagneticButton from "../components/MagneticButton";
import romantic from "../assets/images/romantic-dinner-view-stockcake.jpg";

const occasions = ["Birthday", "Anniversary", "Business Dinner", "Private Event", "Other"] as const;

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  date: z.string().min(1, "Select a date"),
  time: z.string().min(1, "Select a time"),
  guests: z.coerce.number().min(1, "At least 1 guest").max(24, "For 25+ guests, contact us directly"),
  occasion: z.enum(occasions).optional(),
  requests: z.string().max(500).optional(),
});

type FormData = z.infer<typeof schema>;

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Reservation request", data);
    setSubmitted(true);
    reset();
  };

  const inputClass =
    "w-full bg-transparent border-b border-gold/20 focus:border-gold outline-none py-3 text-ivory placeholder:text-ivory/30 transition-colors";
  const labelClass = "eyebrow block mb-2";
  const errorClass = "text-[0.7rem] text-burgundy mt-1 text-red-400";

  return (
    <main className="pt-32 pb-28">
      <section className="relative h-[50vh] flex items-end px-6 md:px-10 mb-20">
        <div className="absolute inset-0 -z-10">
          <img src={romantic} alt="Candlelit table with skyline view" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian/70" />
        </div>
        <div className="max-w-7xl mx-auto w-full pb-14">
          <SectionHeading numeral="Reservations" eyebrow="Your Evening Awaits" title="Reserve Your Experience" />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24 border border-gold/20"
          >
            <p className="font-accent italic text-2xl md:text-3xl mb-4">Your table is being prepared.</p>
            <p className="text-ivory/60 max-w-md mx-auto">
              A member of our reservations team will confirm your evening by email within 24 hours.
            </p>
            <button onClick={() => setSubmitted(false)} className="mt-8 eyebrow text-gold cursor-hover">
              Make Another Reservation
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="sm:col-span-3">
                <label className={labelClass}>Full Name</label>
                <input className={inputClass} placeholder="Jordan Michaels" {...register("name")} />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Email</label>
                <input className={inputClass} placeholder="jordan@email.com" {...register("email")} />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input className={inputClass} placeholder="+1 (000) 000-0000" {...register("phone")} />
                {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <label className={labelClass}>Date</label>
                <input type="date" className={inputClass} {...register("date")} />
                {errors.date && <p className={errorClass}>{errors.date.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Time</label>
                <input type="time" className={inputClass} {...register("time")} />
                {errors.time && <p className={errorClass}>{errors.time.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Guests</label>
                <input type="number" min={1} max={24} className={inputClass} placeholder="2" {...register("guests")} />
                {errors.guests && <p className={errorClass}>{errors.guests.message}</p>}
              </div>
            </div>

            <div>
              <label className={labelClass}>Occasion</label>
              <div className="flex flex-wrap gap-3">
                {occasions.map((o) => (
                  <label
                    key={o}
                    className="cursor-hover text-xs tracking-wide uppercase border border-gold/20 px-4 py-2 has-[:checked]:border-gold has-[:checked]:text-gold transition-colors"
                  >
                    <input type="radio" value={o} className="hidden" {...register("occasion")} />
                    {o}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass}>Special Requests</label>
              <textarea
                className={inputClass}
                rows={4}
                placeholder="Allergies, seating preferences, celebrations..."
                {...register("requests")}
              />
            </div>

            <MagneticButton variant="solid" type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? "Reserving..." : "Reserve Experience"}
            </MagneticButton>
          </form>
        )}
      </div>
    </main>
  );
}
