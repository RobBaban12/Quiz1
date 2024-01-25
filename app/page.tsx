import Footer from "./components/Footer";
import Header from "./components/Header";
import Members from "./components/Members";
import Projects from "./components/Projects";

import { motion } from "framer-motion"
import Start from "./components/Start";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Start />
      <Members />
      <Projects />
      <Footer />
    </main>
  );
}
