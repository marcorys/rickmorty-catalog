import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  image: string;
}

interface ApiResponse {
  results: Character[];
  info: { next: string | null };
}

export function useCharacters(nameFilter: string) {
  return useInfiniteQuery<ApiResponse>(
    ['characters', nameFilter],
    ({ pageParam = `https://rickandmortyapi.com/api/character?name=${nameFilter}` }) =>
      axios.get<ApiResponse>(pageParam).then(res => res.data),
    {
      getNextPageParam: last => last.info.next || undefined,
      keepPreviousData: true
    }
  );
}
