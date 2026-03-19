import { Metadata } from 'next';
import ServicosClient from './page-client';

export const metadata: Metadata = {
  title: 'Nossos Serviços | Detalhamento, Polimento, Vitrificação e PPF',
  description: 'Portfólio de serviços de alta performance. Lavagem detalhada, correção de pintura, películas automotivas e blindagem tecnológica em estúdio.',
  alternates: {
    canonical: '/servicos',
  }
};

export default function ServicosPage() {
  return <ServicosClient />;
}
