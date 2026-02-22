import React, { useState } from "react";
import { LeadFormData, SubmissionStatus } from "../types";

export const useLeadForm = (initialData: LeadFormData) => {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [formData, setFormData] = useState<LeadFormData>(initialData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ 
      ...prev, 
      [e.target.id.replace("lead-", "")]: e.target.value 
    }));
  };

  const resetStatus = () => setStatus("idle");

  return {
    formData,
    status,
    handleSubmit,
    handleChange,
    resetStatus
  };
};
