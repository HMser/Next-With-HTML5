import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import ContactForm from "../components/contactForm";
import SpotifyFooter from "../components/SpotifyFooter";
import scroll from "../components/scroll";
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  <main className="main">
    {/* HOME */}
    <section className="home container" id="home">
     <div className="swiper home-siper">
        <div className="swiper-wapper">
        
          {/* HOME SLIDER 1 */}
          <section className="swiper-slide">
            <div className="home__content grid">
              <div className="home__group">
                <Image
                  src="images/events/xmas.png"
                  alt="Be Happy 😃"
                  className="home__img"
                />
                <div className="home__indicator" />
                <div className="home__details-img">
                  <h4 className="home__details-title">Captain Sem</h4>
                  <span className="home__details-subtitle">
                    
                  </span>
                </div>
              </div>
              <div className="home__data">
                <h3 className="home__subtitle">#1 Top Scariest Ghost</h3>
                <h1 className="home__title">
                  RESPAWN <br /> THE SPOOKY <br /> SKULL{" "}
                </h1>
                <p className="home__description">
                  In search for cute little puppy, Captain Sem has come back
                  from his tragic death. With his hogwarts certified power he
                  promise to be a hero for all of ghostkind.{" "}
                </p>
                <div className="home__buttons">
                  <a href="#" className="book--now">
                    <Image
                      src="images/logo/new.png"
                      alt=""
                    />
                  </a>
                  <a href="#" className="button--link button--flex">
                    Track Record{" "}
                    <i className="bx bx-right-arrow-alt button__icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="swiper-pagination" />
      </div>
    </section>
    {/* CATEGORY */}
    <section className="section category">
      <h2 className="section__title">
        Favorite Scare <br /> Category{" "}
      </h2>
      <div className="category__container container grid">
        <div className="category__data">
          <Image
            src="https://assets.codepen.io/7773162/category1-img.png"
            alt=""
            className="category__img"
          />
          <h3 className="category__title">Ghosts</h3>
          <p className="category__description">
            Choose the ghosts, the scariest there are.
          </p>
        </div>
        <div className="category__data">
          <Image
            src="https://assets.codepen.io/7773162/category2-img.png"
            alt=""
            className="category__img"
          />
          <h3 className="category__title">Pumpkins</h3>
          <p className="category__description">
            You look at the scariest pumpkins there is.
          </p>
        </div>
        <div className="category__data">
          <Image
            src="https://assets.codepen.io/7773162/category3-img.png"
            alt=""
            className="category__img"
          />
          <h3 className="category__title">Witch Hat</h3>
          <p className="category__description">
            Pick the most stylish witch hats out there.
          </p>
        </div>
      </div>
    </section>
    {/* ABOUT */}
    <section className="section about" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">
            About Halloween <br /> Night{" "}
          </h2>
          <p className="about__description">
            Night of all the saints, or all the dead, is celebrated on October
            31 and it is a very fun international celebration, this celebration
            comes from ancient origins, and is already celebrated by everyone.{" "}
          </p>
          <a href="#" className="book--now">
            <Image
              src="images/svg/booking.svg"
              alt=""
            />
          </a>
        </div>
        <Image
          src="https://assets.codepen.io/7773162/about-img.png"
          alt=""
          className="about__img"
        />
      </div>
    </section>
    {/* TRICK OR TREAT */}
    <section className="section trick" id="trick">
      <h2 className="section__title">Whatsapp Groups</h2>
      <div className="trick__container container grid">
        <div className="trick__content">
          <Image
            src="images/logo/s.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Status Area</h3>
          <span className="trick__subtitle">Main Group</span>
          <span className="trick__price"></span>
<a href="https://chat.whatsapp.com/F5zf3ZFSMUUFY328aQxd7W">          
<button className="button trick__button">
            <i className="bx bxl-whatsapp trick__icon" />
          </button>
</a>
        </div>
        <div className="trick__content">
          <Image
            src="images/logo/s2.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Status Area</h3>
          <span className="trick__subtitle">2nd Group</span>
          <span className="trick__price"></span>
<a href="https://chat.whatsapp.com/BfhHq6o0muHJcaqkrv7iq9">
          <button className="button trick__button">
            <i className="bx bxl-whatsapp trick__icon" />
          </button>
</a>
        </div>
        <div className="trick__content">
          <Image
            src="images/logo/s3.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Status Area</h3>
          <span className="trick__subtitle">3rd Group</span>
          <span className="trick__price"></span>
<a href="https://chat.whatsapp.com/L3V5N4GWZhKIj6eWr5Wpfj">          
<button className="button trick__button">
            <i className="bx bxl-whatsapp trick__icon" />
          </button>
</a>
        </div>
        <div className="trick__content">
          <Image
            src="images/logo/s4.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Status Area</h3>
          <span className="trick__subtitle">4rth Group</span>
          <span className="trick__price"></span>
<a href="https://chat.whatsapp.com/Fz037hIYReICQP4XK40kmX">
          <button className="button trick__button">
            <i className="bx bxl-whatsapp trick__icon" />
          </button>
</a>
        </div>
        <div className="trick__content">
          <Image
            src="images/logo/ak.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Audio Group</h3>
          <span className="trick__subtitle">Audio Caption Kingdom</span>
          <span className="trick__price"></span>
<a href="https://chat.whatsapp.com/C20IH5Vk4lhJelpBvq1UB4">
          <button className="button trick__button">
            <i className="bx bxl-whatsapp trick__icon" />
          </button>
</a>
        </div>
        <div className="trick__content">
          <Image
            src="images/logo/ak.png"
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Audio Group 2</h3>
          <span className="trick__subtitle">Audio Caption Kingdom</span>
          <span className="trick__price"></span>
<a href="https://chat.whatsapp.com/E5bbof857iUIrdSPJIqEWK">
          <button className="button trick__button">
            <i className="bx bxl-whatsapp trick__icon" />
          </button>
</a>
        </div>
      </div>
    </section>
    {/* DISCOUNT */}
    <section className="section discount">
      <div className="discount__container container grid">
        <div className="discount__data">
          <h2 className="discount__title">
            50% Discount <br /> On New Products{" "}
          </h2>
          <a href="#" className="book--now">
            <Image
              src="images/svg/booking.svg"
              alt=""
            />
          </a>
        </div>
        <Image
          src="https://assets.codepen.io/7773162/discount-img.png"
          alt=""
          className="discount__img"
        />
      </div>
    </section>
    {/* NEW ARRIVALS */}
<Script strategy="lazyOnload" src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.2/swiper-bundle.min.js'></Script>
<Script strategy="lazyOnload" src='https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.min.js'></Script>
<Script strategy="lazyOnload" src="./script.js"></Script>
    <section className="section new" id="new">
      <h2 className="section__title">New Movies</h2>
      <div className="new__container container">
        <div className="swiper new-swiper">
          <div className="swiper-wrapper">
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <Image
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <Image
                src="https://assets.codepen.io/7773162/new1-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Haunted House</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$14.99</span>
                <span className="new__discount">$29.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bxl-telegram new__icon" />
              </button>
            </div>
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <Image
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <Image
                src="https://assets.codepen.io/7773162/new2-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Halloween Candle</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$11.99</span>
                <span className="new__discount">$21.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bxl-telegram new__icon" />
              </button>
            </div>
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <Image
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <Image
                src="https://assets.codepen.io/7773162/new3-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Witch Hat</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$4.99</span>
                <span className="new__discount">$9.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bxl-telegram new__icon" />
              </button>
            </div>
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <Image
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <Image
                src="https://assets.codepen.io/7773162/new4-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Rip</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$24.99</span>
                <span className="new__discount">$44.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bxl-telegram new__icon" />
              </button>
            </div>
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <Image
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <Image
                src="https://assets.codepen.io/7773162/new5-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Terrifying Crystal Ball</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$5.99</span>
                <span className="new__discount">$12.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bxl-telegram new__icon" />
              </button>
            </div>
            <div className="new__content swiper-slide">
              <div className="new__tag">
                <Image
                  src="https://assets.codepen.io/7773162/svgviewer-output+%286%29_1.svg"
                  alt=""
                />
              </div>
              <Image
                src="https://assets.codepen.io/7773162/new6-img.png"
                alt=""
                className="new__img"
              />
              <h3 className="new__title">Witch Broom</h3>
              <span className="new__subtitle">Accessory</span>
              <div className="new__prices">
                <span className="new__price">$7.99</span>
                <span className="new__discount">$14.99</span>
              </div>
              <button className="button new__button">
                <i className="bx bxl-telegram new__icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* OUR NEWSLETTER */}
    <section className="section newsletter">
      <div className="newsletter__container container">
        <h2 className="section__title">Looking for creators 🤩</h2>
        <p className="newsletter__description">
          {" "}
          In honor of our team's 2nd anniversary, the team is inviting more creators to work with us.

Those interested contact us{" "}
        </p>
        <ContactForm />
      </div>
    </section>
  </main>
  <scroll />
<SpotifyFooter />
 
</>

  )
}
