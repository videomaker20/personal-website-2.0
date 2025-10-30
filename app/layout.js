import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{backgroundImage: "url('/assets/bg.jpg')"}}>
        {children}
      </body>
    </html>
  );
}
