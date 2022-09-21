import type { NextPage } from 'next'
import Head from 'next/head'
import ContactPage from "../components/ContactPage";
import styles from '../styles/Home.module.css'
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chairlift6</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/images/telesiege6-logo.svg" />
      </Head>
      <div className="flex flex-col justify-end min-h-screen">
          <main className="p-8">
              <section className="w-full flex flex-col text-slate-700 items-center">
                  {/*<img className="max-h-80" src={"/assets/images/telesiege6-logo.svg"}/>*/}
                  <Image src={"/assets/images/telesiege6-logo.svg"} alt="logo chairlift6" width="350px"
                         height="300px"
                          />
                  <span className="uppercase text-2xl font-medium font-inter">BIENTOT DISPONIBLE</span>
              </section>
          </main>
          <footer className="">
              <ContactPage />
              <div className="w-full text-center p-4 text-sm bg-secondary">
                  <a  href="https://labs.haystack.asia/"
                      target="_blank"
                      rel="noopener noreferrer" >
                      Fabriqué avec ❤️ Par Haystack Labs Studios CO. LTD. <span className={'hidden sm:inline'}>  Tous les droits sont réservés &copy;{new Date().getFullYear()} à Phnom Penh. </span>
                  </a>
              </div>
          </footer>
      </div>
    </div>
  )
}

export default Home
