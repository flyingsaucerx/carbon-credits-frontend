import Head from "next/head";
import Navbar from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Carbon Credits</title>
      </Head>
      <Navbar />
      <div className="bg-white min-h-screen">
        <main className="max-w-3xl mx-auto text-center text-black text-opacity-70">
          {children}
        </main>
      </div>
    </>
  );
}