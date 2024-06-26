
import { Header } from "@/components/ui/header";
import "../app/globals.css";
import { Footer } from "@/components/ui/footer";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Rebuilding Linear Customer Page',
  description: 'Rebuilding Linear Customer Page',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header/>
          <main className="pt-navigation-height">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
