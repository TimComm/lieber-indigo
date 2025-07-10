import Carousel from '@/components/Carousel';

export default function Home() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Carousel images={images} />
      <h1 className="text-4xl font-bold text-white">Lieber Indigo</h1>
    </main>
  );
}