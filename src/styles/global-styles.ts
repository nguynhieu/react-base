import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: auto;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    font-family: 'Rubik','Neutra Text Alt', sans-serif;
    font-family: 'Rubik','Neutra Text Light', sans-serif;
    font-family: 'Rubik','Neutra Text TF', sans-serif;
    font-family: 'Rubik','Neutra Text', sans-serif;

  }

  body {
    font-family: 'Rubik','Neutra Text Alt', sans-serif;
    font-family: 'Rubik','Neutra Text Light', sans-serif;
    font-family: 'Rubik','Neutra Text TF', sans-serif;
    font-family: 'Rubik','Neutra Text', sans-serif;
 }

  body.fontLoaded {
    font-family: 'Rubik','Neutra Text Alt', sans-serif;
    font-family: 'Rubik','Neutra Text Light', sans-serif;
    font-family: 'Rubik','Neutra Text TF', sans-serif;
    font-family: 'Rubik','Neutra Text', sans-serif;
  }

  label::first-letter {
    text-transform: capitalize;
  }



@font-face {
  font-family: 'Rubik','Neutra Text';
  font-style: normal;
  font-weight: 400;
  src:  url("") format('opentype');
}

  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  .fod__table {
    margin-top: 1.25rem;
    overflow-x: auto;
  }

  .fod__table table {
    flex-shrink: 0;
    width: 100%;
    min-width: 1000px;
  }

  .fod__table table thead {
    background: #303539;
    color: #fff;
    height: 2.5625rem;
  }

  .fod__table table thead tr th {
    white-space: nowrap;
    padding: 0.75rem 1.875rem;
    font-size: 1rem;
    font-weight: 400;
  }

  .fod__table table tbody tr:nth-child(odd) {
    background: #f7f7f9;
  }

  .fod__table table tbody td {
    white-space: nowrap;
    padding: 0.75rem 1.875rem;
    font-size: 0.875rem;
    color: #606060;
  }

  .fod__table table tbody td .table__search {
    position: relative;
    height: 1.875rem;
    min-width: 5.625rem;
  }
`;
