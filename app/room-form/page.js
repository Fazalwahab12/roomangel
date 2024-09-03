"use client";
import React, { useState } from "react";
import RoomForm from "../components/RoomForm";
import ImageUploadRoom from "../components/ImageUploadRoom";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(2);
  };

  return (
    <div className="container mx-auto p-8">
      {step === 1 && <RoomForm onNext={handleNext} />}
      {step === 2 && <ImageUploadRoom />}
    </div>
  );
}
