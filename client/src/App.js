import React, { setState, useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Home from './pages/Home';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  const [ isClicked, setClicked] = useState('false')
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home
                  isClicked = {isClicked} setClicked = {setClicked}
                  ></Home>}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
                <Route path="/profile">
                  <Route path=":username" 
                  element={<Profile
                    isClicked = {isClicked} setClicked = {setClicked}
                    ></Profile>}
                   />
                  <Route path="" 
                  element={<Profile
                    isClicked = {isClicked} setClicked = {setClicked}
                    ></Profile>} 
                  />
                </Route> 
                <Route
                  path="/thought/:id"
                  element={<SingleThought
                    isClicked = {isClicked} 
                    setClicked = {setClicked}
                    ></SingleThought>}
                />
              <Route
                path="/thought"
                element={<SingleThought
                  isClicked = {isClicked} 
                  setClicked = {setClicked}
                  ></SingleThought>}
              />
              <Route
              path="*"
              element={<NoMatch />}
            />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
