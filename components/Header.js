import { FiStar } from "react-icons/fi";
import Navbar from "./Navbar";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export default function Header({ title }) {
  return (
    <header className="w-full">
      <Navbar />
    </header>
  );
}
