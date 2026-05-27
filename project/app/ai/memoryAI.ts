import { supabase } from "@/lib/supabase";

/* ---------------- MEMORY AI ENGINE ---------------- */

export async function generateAIResponse(message: string) {

  const msg = message.toLowerCase();

  // LOAD BUSINESS MEMORY
  const { data: memory, error } = await supabase
    .from("business_memory")
    .select("*");

  if (error) {
    console.error("Memory AI Error:", error);

    return "AI memory system encountered an issue.";
  }

  // CONVERT MEMORY TO OBJECT
  const mem: Record<string, string> = {};

  memory?.forEach((item) => {
    mem[item.key] = item.value;
  });

  /* ---------------- SMART MEMORY RESPONSES ---------------- */

  // Greeting
  if (
    msg.includes("hello") ||
    msg.includes("hi") ||
    msg.includes("hey")
  ) {
    return (
      mem.greeting ||
      "Hello 👋 Welcome to our business platform."
    );
  }

  // Pricing
  if (
    msg.includes("price") ||
    msg.includes("pricing") ||
    msg.includes("cost")
  ) {
    return (
      mem.pricing ||
      "Pricing depends on the requested service."
    );
  }

  // Delivery
  if (
    msg.includes("delivery") ||
    msg.includes("shipping")
  ) {
    return (
      mem.delivery ||
      "Delivery usually takes 2–5 business days."
    );
  }

  // Support
  if (
    msg.includes("support") ||
    msg.includes("help")
  ) {
    return (
      mem.support ||
      "Our support team is available anytime."
    );
  }

  // Jobs
  if (
    msg.includes("job") ||
    msg.includes("work") ||
    msg.includes("career")
  ) {
    return (
      mem.jobs ||
      "Visit the Jobs section for opportunities."
    );
  }

  /* ---------------- ADVANCED FALLBACK ---------------- */

  if (Object.keys(mem).length > 0) {
    return `
${mem.greeting || "Welcome to our business."}

I understand your request and our business assistant is here to help.

A human representative may also assist you shortly.
    `;
  }

  /* ---------------- DEFAULT RESPONSE ---------------- */

  return "Thank you for contacting us. A representative will respond shortly.";
}