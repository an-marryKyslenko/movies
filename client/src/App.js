import React, { useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material'
import { Navigation } from './components';
import { Route, Routes } from 'react-router-dom';
import { Home, Recommend, Settings } from './pages'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from
} from '@apollo/client';
import { HTTP_LINK } from './const';
import { AppContext } from './providers/appContext';
import I18nProvider from './providers/i18n';

function App() {
  const { state } = useContext(AppContext)
  const httpLink = new HttpLink({ uri: HTTP_LINK });

  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customeHeader = operation.getContext().hasOwnProperty("headers")
      ? operation.getContext().headers
      : {};

    operation.setContext({
      headers: {
        ...customeHeader,
        locale: state.locale
      }
    })
    return forward(operation)
  })

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });
  return (
    <I18nProvider locale={state.locale}>
      <ApolloProvider client={client}>
          <CssBaseline />
          <Navigation />

          <Box sx={{
            backgroundColor: (theme) => theme.palette.grey[100]
          }}>
            <Container >
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='settings' element={<Settings />} />
                <Route path='recommend' element={<Recommend />} />
              </Routes>
            </Container>
          </Box>
      </ApolloProvider>
    </I18nProvider>
  );
}

export default App;
