import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  )
}
