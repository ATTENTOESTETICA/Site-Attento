import { Metadata } from 'next';
import ContatoClient from './page-client';

export const metadata: Metadata = {
  title: 'Contato | Agende uma Avaliação na Attento',
  description: 'Agende uma avaliação com os especialistas da Attento. Estúdios premium em Brasília (Aeroporto) prontos para receber o seu carro.',
  alternates: {
    canonical: '/contato',
  }
};

export default function ContatoPage() {
  return <ContatoClient />;
}
