"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label, FormControl } from "@/components/ui/form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Nastala chyba pri odosielaní správy');
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      
      setSubmitStatus({
        success: true,
        message: data.message || "Vaša správa bola úspešne odoslaná. Čoskoro vás budeme kontaktovať.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: error instanceof Error 
          ? error.message 
          : "Nastala chyba pri odosielaní správy. Prosím, skúste to znovu neskôr.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      id: "name",
      label: "Meno a priezvisko",
      type: "text",
      required: true,
      placeholder: "Zadajte vaše meno a priezvisko",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Zadajte váš email",
    },
    {
      id: "phone",
      label: "Telefón",
      type: "tel",
      required: false,
      placeholder: "Zadajte vaše telefónne číslo",
    },
    {
      id: "message",
      label: "Správa",
      type: "textarea",
      required: true,
      placeholder: "Napíšte vašu správu...",
      rows: 5,
    },
  ];

  return (
    <motion.div 
      className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-white">Kontaktný formulár</h3>
      
      {submitStatus.message && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className={`p-4 mb-6 rounded-md flex items-center ${
            submitStatus.success
              ? "bg-green-800 text-green-100"
              : "bg-red-800 text-red-100"
          }`}
        >
          {submitStatus.success ? (
            <CheckCircle className="mr-2 h-5 w-5" />
          ) : (
            <AlertCircle className="mr-2 h-5 w-5" />
          )}
          {submitStatus.message}
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {formFields.map((field) => (
          <motion.div 
            key={field.id}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <FormControl>
              <Label htmlFor={field.id} className="text-white">{field.label}</Label>
              {field.type === "textarea" ? (
                <Textarea
                  id={field.id}
                  name={field.id}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  className={`mt-1 w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 transition-all`}
                />
              ) : (
                <Input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  className={`mt-1 w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 transition-all`}
                />
              )}
            </FormControl>
          </motion.div>
        ))}
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            variant="red"
            className="w-full mt-6 flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="32"
                      strokeDashoffset="12"
                    />
                  </svg>
                </motion.div>
                Odosielam...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Odoslať správu
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
