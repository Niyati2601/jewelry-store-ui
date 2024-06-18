import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Landing from "@/Components/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jewelry Store</title>
      </Head>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <Landing />
      </main>
      <Footer />
    </>
  );
}

