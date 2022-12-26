import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'

function HeaderComponent() {    
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
      <a href="#" className="nav__logo">
        {" "}
        Status Area{" "}
      </a>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              Graveyard
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#trick" className="nav__link">
              Latest Status
            </a>
          </li>
          <li className="nav__item">
            <a href="#new" className="nav__link">
              New Movies
            </a>
          </li>
          <a href="about" className="button button--ghost">
            Blog
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
</>
    )
}
export default HeaderComponent
