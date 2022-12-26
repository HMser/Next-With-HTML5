// 404.js
import Link from 'next/link'
import SpotifyFooter from "../components/SpotifyFooter";
export default function FourOhFour() {
  return <>
    <SpotifyFooter />
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}
