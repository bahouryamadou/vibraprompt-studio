import "./globals.css";

export const metadata = {
  title: "Vibra AI",
  description: "Générateur IA de sites vitrines"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
