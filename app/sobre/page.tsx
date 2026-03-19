import { Metadata } from 'next';
import SobreClient from './page-client';

export const metadata: Metadata = {
  title: 'Sobre a Attento | Nossa Essência e Compromisso',
  description: 'Conheça a história e o compromisso da Attento Estética Automotiva Premium. Mais do que estética veicular, uma obsessão pela perfeição e detalhamento automotivo de elite.',
  alternates: {
    canonical: '/sobre',
  }
};

export default function SobrePage() {
  return <SobreClient />;
}
