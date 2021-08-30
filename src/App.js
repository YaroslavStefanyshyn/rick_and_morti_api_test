import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import EpisodesContainer from './components/Episodes/EpisodesContainer';
import LocationsContainer from './components/Locations/LocationsContainer';
import MyWatchList from './components/MyWatchList/MyWatchList';
import CharactersContainer from './components/Characters/CharactersContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className='app-content'>
          <Route path='/' exact component={Welcome} />
          <Route path='/characters' render={() => <CharactersContainer />}></Route>
          <Route path='/episodes' render={() => <EpisodesContainer />}></Route>
          <Route path='/locations' render={() => <LocationsContainer />}></Route>
          <Route path='/myWatchList' component={MyWatchList}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
