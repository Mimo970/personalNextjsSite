import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex's Developer Website",
  description:
    " I am a dedicated college student currently studying computer science, with over a year of experience in React. My passion lies in learning and problem-solving, always eager to explore new opportunities to expand my knowledge and skills. I thrive in dynamic environments where I can apply my creativity to develop innovative solutions. My journey in the tech world has been driven by a love for coding and a keen interest in emerging technologies. In addition to my technical expertise, I enjoy collaborating with others, believing that teamwork fosters greater innovation and success. As I continue to grow in my career, I am excited to take on new challenges that push the boundaries of my capabilities and contribute meaningfully to impactful projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
