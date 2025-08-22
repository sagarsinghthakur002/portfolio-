"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "./ui/button"

function Form() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Grab EmailJS keys from env
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if any key is missing
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert(
        "⚠️ EmailJS configuration is missing! Check your .env.local file."
      );
      console.error("Missing EmailJS config:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      console.log("EmailJS success:", result.text);
      alert("✅ Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error("EmailJS error:", error.text || error);
      alert(`❌ Failed to send. ${error.text || "Please try again later."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="border p-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        className="border p-2 rounded"
        required
      />
      <Button
        type="submit"
        disabled={loading}
        className=" py-2 px-4 rounded disabled:opacity-50 "
      >
        {loading ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}

export default Form;
