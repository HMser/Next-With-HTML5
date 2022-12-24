import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
          <meta charset="UTF-8" />
<meta name="google" content="notranslate" />
<link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
<link rel="manifest" href="icons/site.webmanifest" />
<link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5" />
<meta name="msapplication-TileColor" content="#2d89ef" />
<meta name="theme-color" content="#ffffff" />

		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  <title>StatusArea</title>
  <link rel='stylesheet' href='https://assets.codepen.io/7773162/swiper-bundle.min.css' />
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css '/>
     

 </Head>

  <Script strategy="lazyOnload" src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.2/swiper-bundle.min.js'></Script>
<Script strategy="lazyOnload" src='https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.min.js'></Script>
<Script strategy="lazyOnload" src="./script.js"></Script>
      <>
  {/* partial:index.partial.html */}
  {/* HEADER */}
  <header className="header" id="header">
    <nav className="nav container">
      <Link href="/" className="nav__logo">
        {" "}
        Status Area{" "}
      </Link>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              Graveyard
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              Track Record
            </a>
          </li>
          <li className="nav__item">
            <a href="#trick" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#new" className="nav__link">
              Know More
            </a>
          </li>
          <a href="#" className="button button--ghost">
            Support
          </a>
        </ul>
        <div className="nav__close" id="nav-close">
          <i className="bx bx-x" />
        </div>
        <Image
          src="https://assets.codepen.io/7773162/nav-img.png"
          alt=""
          className="nav__img"
        />
      </div>
      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-grid-alt" />
      </div>
    </nav>
  </header>



<h1 style="color: green;"> 

    GeeksforGeeks 

</h1> 

<p> 

    For displaying the alert message, double 

    click the "Show Alert Message" button: 

</p> 

  

<button ondblclick="myalert()"> 

    Show Alert Message 

</button> 

  

<Script 

    function myalert() { 

        alert("Welcome to GeeksforGeeks.\n " + 

            "It is the best portal for computer" + 

                    "science enthusiasts!"); 

    } >

</Script>

<footer>
  <div className="inside__footer">
    <p className="copyright">
      Design By  <a href="https://www.hmser.ml/"> HM </a>
      <br />
       {`© ${new Date().getFullYear()}`} StatusArea, All Rights Reserved.
      <br /> </p>
  </div>
</footer>
 
</>


    </>
  )
}
