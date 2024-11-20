// app/layout.tsx
import React from 'react';
import './globals.css';
import { Providers } from './providers'

export const metadata = {
  title: 'DNA',
  description: 'Dionico Noe Alegarbes',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
