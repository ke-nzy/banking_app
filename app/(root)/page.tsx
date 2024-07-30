import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = { firstName: 'Kennedy', lastName: 'Ngugi', email: 'ngugi@gmail.com' }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="To your personal banking app, a world of true wonders"
          />
          <TotalBalanceBox 
            accounts = {[]}
            totalBanks={1}
            totalCurrentBalance={11250.60}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user = {loggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 123.50}, {currentBalance: 500.20}]}
      />
    </section>
  )
}

export default Home