"use client";
import React, { useState } from "react";
import FormComponent from "../components/HotelForm";
import ImageUploadComponent from "../components/ImageUploadHotel";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(2);
  };

  return (
    <div className="container mx-auto p-8">
      {step === 1 && <FormComponent onNext={handleNext} />}
      {step === 2 && <ImageUploadComponent />}
    </div>
  );
}
