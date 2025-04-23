import React, { useRef, useCallback } from "react";
import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";
import Header from "../components/Header";

interface Props {
  filter: string;
  onFilterChange: (f: string) => void;
}

export default function Home({ filter, onFilterChange }: Props) {
  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    status,
  } = useCharacters(filter);
  const observer = useRef<IntersectionObserver>();

  const lastCardRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) fetchNextPage();
      });
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  return (
    <div className="min-h-screen bg-rm-dark">
      <Header filter={filter} onFilterChange={onFilterChange} />
      <main className="p-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {status === "loading" && <Loader />}
        {status === "error" && <p>Erro ao carregar</p>}
        {data?.pages.map((page, pi) =>
          page.results.map((char, ci) => {
            const isLast =
              pi === data.pages.length - 1 &&
              ci === page.results.length - 1;
            return (
              <div key={char.id} ref={isLast ? lastCardRef : null}>
                <CharacterCard
                  name={char.name}
                  image={char.image}
                  status={char.status}
                />
              </div>
            );
          })
        )}
        {isFetchingNextPage && <Loader />}
      </main>
    </div>
  );
}
