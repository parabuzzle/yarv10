import React from 'react'

import MainContent from '../../components/layout/MainContent';

const Home = ({match, location, history}) => (
  <div>
    <MainContent title="Welcome" match={match} location={location} history={history}>
      Welcome to Yet Another RV 10 build website.
    </MainContent>
  </div>
)
export default Home
