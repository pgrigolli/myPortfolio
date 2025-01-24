import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: '700', // Definindo o peso da fonte (bold)
  subsets: ['latin'], // Define o subconjunto de caracteres (latin, neste caso)
  variable: '--font-poppins', // Cria uma variável CSS para a fonte
});

export const metadata = {
  title: "Pedro Grigolli's Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
