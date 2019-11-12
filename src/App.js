import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

// Import Components
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

// Import Pages
import History from './pages/History/History';
import Rockets from './pages/Rockets/Rockets';
import RocketDetails from './pages/RocketDetails/RocketDetails';
import About from './pages/About/About';
import Mission from './pages/Missions/Mission';
import Launchpad from './pages/launchpads/launchpad';
import Landpad from './pages/landpads/landpad';
import Launches from './pages/launches/launches';
import Ships from './pages/Ships/Ships';
import ShipDetails from './pages/ShipDetails/ShipDetails';

function App() {
  const [ loading,setLoading ] = useState(true);

  // useEffect runs after component renders
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      clearTimeout(loadingTimer);
      setLoading(false);
    }, 1500);
  });

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        { 
          loading ? (
            <Loading />
          ) : (
            <Switch>
              <Route exact path="/" component={History} />
              <Route exact path="/rockets" component={Rockets} />
              <Route exact path="/ships" component={Ships} />
              <Route exact path="/mission" component={Mission} />
              <Route exact path="/launches" component={Launches} />
              <Route exact path="/launchpad" component={Launchpad} />
              <Route exact path="/landpad" component={Landpad} />
              <Route path="/rockets/:rocketDetailsId" component={RocketDetails} />
              <Route path="/ships/:shipDetailsId" component={ShipDetails} />
              <Route path="/about" component={About} />
            </Switch>
          )
        }
      </div>
    </div>
  );
}

export default App;
