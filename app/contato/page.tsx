import { Metadata } from 'next';
import ContatoClient from './page-client';

export const metadata: Metadata = {
  title: 'Contato | Agende uma Avaliação na Attento',
  description: 'Fale com os especialistas da Attento. Oferecemos estética automotiva premium em Brasília, Goiânia, Ribeirão Preto e Campinas. Agende sua avaliação!',
  alternates: {
    canonical: '/contato',
  }
};

export default function ContatoPage() {
  return <ContatoClient />;
}
