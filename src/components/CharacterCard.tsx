import React from "react";

interface Props {
  name: string;
  image: string;
  status: "Alive" | "Dead" | "unknown";
}

export default function CharacterCard({ name, image, status }: Props) {
  const statusColor =
    status === "Alive"
      ? "bg-rm-portal"
      : status === "Dead"
      ? "bg-red-600"
      : "bg-gray-600";

  return (
    <div
      className="bg-[#1A1B1E] hover:bg-[#212227] transition-transform transform
                 hover:scale-[1.02] border-2 border-transparent hover:border-rm-neon
                 rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <span
          className={`inline-block px-3 py-1 text-sm text-white rounded-full ${statusColor}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
