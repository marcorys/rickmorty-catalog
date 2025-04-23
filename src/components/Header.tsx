import React from "react";

interface Props {
  filter: string;
  onFilterChange: (value: string) => void;
}

export default function Header({ filter, onFilterChange }: Props) {
  return (
    <header className="p-4 bg-rm-dark shadow-md border-b border-rm-portal sticky top-0 z-10">
      <input
        type="text"
        placeholder="🔍 Buscar personagem..."
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="w-full max-w-md p-3 bg-rm-dark border-2 border-rm-portal rounded-lg placeholder-rm-text focus:outline-none focus:ring-2 focus:ring-rm-neon"
        aria-label="Filtro por nome"
      />
    </header>
  );
}
