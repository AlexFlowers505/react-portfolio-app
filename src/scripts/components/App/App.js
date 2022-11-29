/* ============================================================== IMPORTS ============================================================== */

/* =============================== Modules =============================== */
import React from 'react'

/* =============================== Components =============================== */
import Header from '../section-like/header/Header'
import About from '../section-like/about/About'
import Contacts from '../section-like/contacts/Contacts'
import Nav from '../section-like/nav/Nav'
import Portfolio from '../section-like/portfolio/Portfolio'
import Services from '../section-like/services/Services'
import Testimonials from '../section-like/testimonials/Testimonials'
import Xp from '../section-like/xp/Xp'
import Footer from '../section-like/footer/Footer'

/* ============================================================== CODE ============================================================== */
export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Xp />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  )
}

// hide scroll bar issue