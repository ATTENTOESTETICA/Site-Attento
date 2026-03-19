import { Metadata } from 'next';
import PoliticaClient from './page-client';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Attento Estética Automotiva',
  description: 'Nossa política de privacidade detalha como a Attento Estética Automotiva Premium coleta, usa e protege seus dados pessoais e veiculares.',
  alternates: {
    canonical: '/politica-de-privacidade',
  }
};

export default function PoliticaPage() {
  return <PoliticaClient />;
}
