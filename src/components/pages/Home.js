import '../../App.css';
import React from 'react'
import MainSection from '../MainSection';
import CardSection from '../CardSection';
import Footer from '../Footer';
import ListingSection from '../ListingSection';
import AgentSection from '../AgentSection';
import NewsletterSection from '../NewsletterSection';




function Home() {
  return (
    <div>
        <MainSection />
        <CardSection />
        <AgentSection />
        <ListingSection />
        <NewsletterSection />        
        <Footer />
    </div>
  )
}

export default Home