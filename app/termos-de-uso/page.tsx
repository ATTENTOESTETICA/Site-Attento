import { Metadata } from 'next';
import TermosClient from './page-client';

export const metadata: Metadata = {
  title: 'Termos de Uso | Attento Estética Automotiva',
  description: 'Conheça os termos de uso, diretrizes e as condições completas comerciais dos serviços prestados pela Attento Estética Automotiva Premium.',
  alternates: {
    canonical: '/termos-de-uso',
  }
};

export default function TermosPage() {
  return <TermosClient />;
}
