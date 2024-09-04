"use client";
import React, { useState } from "react";

// Initial reviews data
const initialReviewsData = [
  {
    id: 1,
    review: "Review 1",
    value1: "Value 2",
    value2: "Value 2",
    text: "Review Text 1",
    details: "This is the full detailed description of Review 1.",
  },
  {
    id: 2,
    review: "Review 2",
    value1: "Value 5",
    value2: "Value 5",
    text: "Review Text 2",
    details: "This is the full detailed description of Review 2.",
  },
  {
    id: 3,
    review: "Review 3",
    value1: "Value 8",
    value2: "Value 8",
    text: "Review Text 3",
    details: "This is the full detailed description of Review 3.",
  },
];

export default function ReviewPage() {
  const [reviewsData, setReviewsData] = useState(initialReviewsData);
  const [highlightedReview, setHighlightedReview] = useState(null);

  // Handle review click
  const handleClick = (review) => {
    // Update the reviews data to set value2 as "Highlighted review"
    const updatedReviews = reviewsData.map((r) => {
      if (r.id === review.id) {
        return { ...r, value2: "Highlighted review" }; // Set value2 to "Highlighted review"
      }
      return r;
    });

    setReviewsData(updatedReviews); // Update the reviewsData state
    setHighlightedReview(review); // Set the clicked review as the highlighted review
  };

  return (
    <div className="min-h-screen flex mt-20 mb-4 mx-2  border-[#1f5453] border-2 rounded-xl md:m-8 sm:m-2 flex-col p-2">
      {/* Review List */}
      <div className=" border-[#1f5453] p-1 border-2 rounded-lg mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">
                Review
              </th>
              <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">
                Value 1
              </th>
              <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">
                Value 2
              </th>
              <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase">
                Review Text
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reviewsData.map((review) => (
              <tr
                key={review.id}
                className={`cursor-pointer ${
                  highlightedReview?.id === review.id ? "bg-yellow-200" : ""
                }`}
                onClick={() => handleClick(review)}
              >
                <td className="p-2">{review.review}</td>
                <td className="p-2">{review.value1}</td>
                <td className="p-2">{review.value2}</td>
                <td className="p-2">{review.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Conditionally Render Full Details and Reply Section */}
      {highlightedReview && (
        <div className="grid grid-cols-2 gap-4 mt-3">
          {/* Full Details Section */}
          <div className=" border-[#1f5453] rounded-lg border-2 bg-yellow-100 p-4">
            <h3 className="font-semibold">
              Full Details of Highlighted Review
            </h3>
            <p>{highlightedReview.details}</p> {/* Show full details */}
          </div>

          {/* Reply Section */}
          <div className="p-2 border-[#1f5453] rounded-lg border-2  md:p-4">
            <h3 className="p-2 md:font-semibold">
              Reply to Highlighted Review
            </h3>
            <textarea
              className="w-full border rounded-md p-2"
              rows="4"
              placeholder="Write your reply..."
            ></textarea>
            <button
              type="submit"
              className="btn mt-2 btn-primary btn-lg md:w-100"
            >
              Submit Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
