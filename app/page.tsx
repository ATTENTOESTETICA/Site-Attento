import { Metadata } from 'next';
import HomeClient from './page-client';

export const metadata: Metadata = {
  title: 'Início | Attento Estética Automotiva Premium',
  description: 'Elevamos o padrão estético do seu veículo. Tratamentos premium de Polimento, PPF, Vitrificação e Películas no Brasil.',
  alternates: {
    canonical: '/',
  }
};

export default function Page() {
  return <HomeClient />;
}
