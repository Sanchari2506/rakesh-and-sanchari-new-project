import React from "react";

function ItemCard({
  image,
  title,
  description,
  price,
  buttonText = "Subscribe Now",
  link = "#",
}) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover border-b"
      />

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold mb-3 text-[#0a3758] text-center">{title}</h2>

          {/* HTML Description */}
          <div
            className="text-black text-sm space-y-2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between flex-col mt-6">
          <span className="text-lg font-bold text-green-600">
            {price}
          </span>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a3758] mt-5 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;