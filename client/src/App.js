import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Importing allll of the pages that we'll be able to navigate
// -- but they're sorted by line length.
import Main from './pages/Main';
import Login from './pages/Login';
import Nav from './components/Nav';
import Detail from "./pages/Detail";
// import Signup from './pages/Signup';
import Success from './pages/Success';
import NoMatch from './pages/NoMatch';
// import OrderHistory from './pages/OrderHistory';
import { StoreProvider } from './utils/GlobalState';




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

// the several routes
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Main} />
   
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />

              <Route exact path="/success" component={Success} />
              {/* <Route exact path="/orderHistory" component={OrderHistory} /> */}
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

