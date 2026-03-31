/*
 * EmailJS Setup Instructions:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Create an email service (e.g., Gmail)
 * 3. Create an email template with variables: from_name, phone, email, date, guests, occasion, message
 * 4. Replace the placeholder values below with your actual IDs:
 *    - EMAILJS_SERVICE_ID
 *    - EMAILJS_TEMPLATE_ID
 *    - EMAILJS_PUBLIC_KEY
 */

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { OCCASION_OPTIONS } from "@/constants/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  guests: string;
  occasion: string;
  message: string;
}

const initialForm: FormData = { name: "", phone: "", email: "", date: "", guests: "", occasion: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [sending, setSending] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLFormElement>();

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim())) e.phone = "Valid 10-digit phone required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.date) e.date = "Date is required";
    if (!form.guests) e.guests = "Number of guests required";
    if (!form.occasion) e.occasion = "Select an occasion";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        phone: form.phone,
        email: form.email,
        date: form.date,
        guests: form.guests,
        occasion: form.occasion,
        message: form.message,
      }, EMAILJS_PUBLIC_KEY);
      toast.success("Enquiry sent! We'll get back to you shortly.");
      setForm(initialForm);
    } catch {
      toast.error("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-lg border font-body text-sm bg-card text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors ${
      errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <section id="contact" className="section-padding noise-bg">
      <div className="relative z-10 max-w-3xl mx-auto">
        <SectionHeading title="Plan Your Visit" subtitle="Tell us about your ideal getaway" />

        <form
          ref={ref}
          onSubmit={handleSubmit}
          className={`space-y-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass("name")} maxLength={100} />
              {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
            </div>
            <div>
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass("phone")} maxLength={10} />
              {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass("email")} maxLength={255} />
            {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass("date")} />
              {errors.date && <p className="text-destructive text-xs mt-1 font-body">{errors.date}</p>}
            </div>
            <div>
              <input type="number" placeholder="Number of Guests" min="1" max="500" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className={inputClass("guests")} />
              {errors.guests && <p className="text-destructive text-xs mt-1 font-body">{errors.guests}</p>}
            </div>
          </div>

          <div>
            <select value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })} className={inputClass("occasion")}>
              <option value="">Type of Occasion</option>
              {OCCASION_OPTIONS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            {errors.occasion && <p className="text-destructive text-xs mt-1 font-body">{errors.occasion}</p>}
          </div>

          <div>
            <textarea placeholder="Message / Special Requirements" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass("message")} maxLength={1000} />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
