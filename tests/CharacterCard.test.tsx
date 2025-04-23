import { render, screen } from '@testing-library/react';
import CharacterCard from '../src/components/CharacterCard';

test('exibe nome, imagem e status', () => {
  render(<CharacterCard name="Rick" image="rick.png" status="Alive" />);
  expect(screen.getByText('Rick')).toBeInTheDocument();
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'rick.png');
  expect(screen.getByText('Alive')).toBeInTheDocument();
});
