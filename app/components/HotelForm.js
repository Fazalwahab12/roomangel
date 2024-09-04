"use client";
import React from "react";

export default function FormComponent({ onNext }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-10 md:m-20 border-[#1f5453] border-2">
      <h2 className="text-xl font-semibold mb-4">Form Section</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">First Field</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Second Field</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Third Field</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fourth Field</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fifth Field</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sixth Field</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Seventh Field</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Eighth Field</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg w-100"
          onClick={onNext}
        >
          Next
        </button>
      </form>
    </div>
  );
}
