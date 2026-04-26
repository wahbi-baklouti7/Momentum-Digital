import React, { useState } from "react";
import { LeadFormData, SubmissionStatus } from "../types";

export const useLeadForm = (initialData: LeadFormData) => {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [formData, setFormData] = useState<LeadFormData & { _startTime: number; _honeypot: string }>({
    ...initialData,
    _startTime: Date.now(),
    _honeypot: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _t: (formData as any)._startTime.toString()
        })
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
