import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RedditPage from './pages/RedditPage';
import WikiPage from './pages/WikiPage';


// App routes to pages and uses the react useState to send the term grabbed
// from the form submission on the homepage to the pages for the different services

function App() {
  const [term, setTerm] = useState();
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setTerm={setTerm}/>
          </Route>
          <Route path="/reddit">
            <RedditPage term={term}/>
          </Route>
          <Route path="/wiki">
            <WikiPage term={term}/>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
