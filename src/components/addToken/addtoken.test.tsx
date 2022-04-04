import React from 'react';
import { render, screen } from '@testing-library/react';
//import {AddToken} from './index';
// import {Router} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../../App';


describe('Add Token page ', () => {

    beforeEach(() => {
        const history = createMemoryHistory();
        history.push('/addtoken');
      });

    // test('title Wish Wallet ', () => {
        
    //     render(<App />);
    //   const get = screen.getByText(/Wish Wallet/i);
    //   expect(get).toBeInTheDocument();
    // });
    test('title Add Token ', () => {
        
        render(<App />);
      const get = screen.getByText(/Add Token/i);
      expect(get).toBeInTheDocument();
    });
    // test('title Balance ', () => {
        
    //     render(<App />);
    //   const get = screen.getByText(/Balance/i);
    //   expect(get).toBeInTheDocument();
    // });
  

})





