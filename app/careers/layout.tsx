// app/layout.tsx
import '../globals.css';

export const metadata = {
  title: 'SPG Agency',
  description: 'Sticky sidebar with smooth scroll',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
        <>
            {children}
        </>
  );
}
