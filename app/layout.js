import Script from "next/script";

export const metadata = {
  title: "RiverCross — Coming Soon",
  description: "RiverCross website is coming soon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          defer
          src="https://eyes.anxpl.com/script.js"
          data-website-id="102769c3-2278-42cb-8f7d-5fe7c824c2c9"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
