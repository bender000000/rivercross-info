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
          src="https://cloud.umami.is/script.js"
          data-website-id="3f4d592c-5249-45b8-be28-8282afc1be99"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
