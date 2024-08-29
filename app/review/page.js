import Image from "next/image";

const page = () => {
  return (
    <div className="bg-white   rounded-lg  p-20 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center gap-40">
            <div className="mr-4">
              <p className="text-2xl font-bold">Total Reviews</p>
              <p className="text-xl font-bold">5K+ Reviews</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Average Rating</p>
              <p className="text-xl font-bold">
                4.5 <span className="text-yellow-500">★</span>
              </p>
            </div>
          </div>
        </div>
        {/* Star Rating Breakdown */}
        <div className="flex flex-col items-end pt-8 ">
          <h2 className="text-2xl font-bold">Customer Feedback</h2>
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex  items-center">
              <span className="w-6 text-right">{rating} ★</span>
              <div className="bg-gray-300 w-40 h-2 mx-2 rounded-full">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${rating * 20}%` }}
                ></div>
              </div>
              <span>{rating * 20}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-4">
        {[
          {
            name: "Ryan Wilson",
            review:
              "These headphones provide immersive sound quality and comfort...",
            date: "Mar 23, 2023",
            rating: 5,
            helpful: 6,
            unhelpful: 5,
            avatar: "/path/to/avatar1.jpg",
          },
          {
            name: "Andrew Davis",
            review: "The microphone on these headphones is very clear...",
            date: "Mar 22, 2023",
            rating: 5,
            helpful: 8,
            unhelpful: 3,
            avatar: "/path/to/avatar2.jpg",
          },
          {
            name: "Nicole Adams",
            review:
              "These headphones deliver an incredible audio experience...",
            date: "Mar 21, 2023",
            rating: 5,
            helpful: 7,
            unhelpful: 3,
            avatar: "/path/to/avatar3.jpg",
          },
        ].map((review, idx) => (
          <div key={idx} className="border p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Image
                src={review.avatar}
                alt={review.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="text-lg font-bold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <p className="mb-4">{review.review}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <div className="flex items-center text-gray-500">
                <span className="mr-4">Helpful ({review.helpful})</span>
                <span>Unhelpful ({review.unhelpful})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Submit Your Review</h3>
        <form>
          <div className="flex items-center mb-4">
            <label className="mr-4">Rating:</label>
            <select className="border p-2 rounded-lg">
              {[5, 4, 3, 2, 1].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Star{rating > 1 && "s"}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full border p-2 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full border p-2 rounded-lg"
              rows="4"
              placeholder="Write your review..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            Leave Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
