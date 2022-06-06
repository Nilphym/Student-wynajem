import React, { useReducer } from 'react';
import jwtDecode from 'jwt-decode';

import offerService from '../services/offer';

type OfferProviderProps = {
  children: React.ReactNode;
};

type State = {
  isLoading: boolean;
  offer?: Offer;
  error?: unknown;
};

type Offer = {
  name: string;
  price: string;
  expirationDate: string;
  description: string;
  location: string
  photos: string
  tags: string
}

type Action =
  | { type: 'offers' }
  | { type: 'offers/id'; offer: Offer }
  | { type: 'offers/request'; error: unknown }

const initialState: State = {
  isLoading: false,
  offer: undefined
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'offers':
      return { isLoading: true };
    case 'offers/id':
      return { isLoading: false, offer: action.offer };
    case 'offers/request':
      return { isLoading: false};
  }
};

export const OfferContext = React.createContext({
  state: initialState,
  actions: {
    async addOffer({name, price, expirationDate, description, location, photos, tags}: 
      { name: string; price: string; expirationDate:string;  description:string; location:string; photos:string; tags:string}) {},
    async getOffers() {},
  }
});

export const OfferProvider = ({ children }: OfferProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    async addOffer({ name, price, expirationDate, description, location, photos, tags }: {name: string; price: string;
       expirationDate:string;  description:string; location:string; photos:string; tags:string }) {
      dispatch({ type: 'offers/request' });
    
    },
    logout() {
      dispatch({ type: 'logout' });
    },
    async register({
      email,
      password,
      firstName,
      secondName,
      phone,
      address
    }: {
      email: string;
      password: string;
      firstName: string;
      secondName: string;
      phone: string;
      address: string;
    }) {
      dispatch({ type: 'register/request' });
      try {
        await authService.register({
          email,
          password,
          firstName,
          secondName,
          phone,
          address
        });
        dispatch({ type: 'register/success' });
      } catch (error) {
        dispatch({ type: 'register/failure', error });
      }
    }
  };

  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  );
};
