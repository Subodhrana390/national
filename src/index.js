import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/cltmnfwn41qec07w0g05xoqd0/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
