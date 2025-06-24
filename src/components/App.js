import "../index.css"
import React from "react";

import Main from './pages/P-main.jsx';
import Tests from './pages/P-tests.jsx';
import Articles from './pages/P-articles.jsx'
import Article from './pages/P-article.jsx'
import Page404 from './pages/P-404.jsx'
import ScrollToTop from './ScrollToTop.jsx';
import Navigation from './wrappers/W-navigation.jsx';

import { BrowserRouter as Router, Switch, Route, Link,  Routes} from 'react-router-dom';


const App = () => (
     <Router>
        <ScrollToTop />
        <Navigation className="W-header"></Navigation>

        <Routes>

        <Route path='/tests' element={<Tests />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/article' element={<Article />} />
        <Route path='/page404' element={<Page404 />} />

        <Route path='/SNOKS/' element={<Main />} />

        </Routes>

     </Router>

     
);

export default App;