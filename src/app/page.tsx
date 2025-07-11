"use client";

import Carousel from '@/components/Carousel';
import { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vim } from '@replit/codemirror-vim';

export default function Home() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  const [title, setTitle] = useState('Lieber Indigo');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isEditing) {
        setIsEditing(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEditing]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Carousel images={images} />
      {isEditing ? (
        <CodeMirror
          value={title}
          extensions={[vim()]}
          onChange={(value) => setTitle(value)}
          theme="dark"
          autoFocus={true}
        />
      ) : (
        <h1
          className="text-4xl font-bold text-white whitespace-pre-wrap"
          onClick={() => setIsEditing(true)}
        >
          {title}
        </h1>
      )}
    </main>
  );
}