import React, { useReducer } from 'react';
import jwtDecode from 'jwt-decode';

import authService from '../services/auth';

type UserProviderProps = {
  children: React.ReactNode;
};

type State = {
  isLoading: boolean;
  user?: User;
  error?: unknown;
};

type User = {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  address: string;
  jwt: string;
};

type Action =
  | { type: 'login/request' }
  | { type: 'login/success'; user: User }
  | { type: 'login/failure'; error: unknown }
  | { type: 'logout' }
  | { type: 'register/request' }
  | { type: 'register/success' }
  | { type: 'register/failure'; error: unknown };

const initialState: State = { isLoading: false };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'login/request':
      return { isLoading: true };
    case 'login/success':
      return { isLoading: false, user: action.user };
    case 'login/failure':
      return { isLoading: false, error: action.error };
    case 'logout':
      return initialState;
    case 'register/request':
      return { isLoading: true };
    case 'register/success':
      return { isLoading: false };
    case 'register/failure':
      return { isLoading: false, error: action.error };
  }
};

export const UserContext = React.createContext({
  state: initialState,
  actions: {
    async login({ email, password }: { email: string; password: string }) {},
    logout() {},
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
    }) {}
  }
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    async login({ email, password }: { email: string; password: string }) {
      dispatch({ type: 'login/request' });
      try {
        const jwt: unknown = await authService.login({
          email,
          password
        });
        const user: User = jwtDecode(jwt as string);
        dispatch({ type: 'login/success', user });
      } catch (error) {
        dispatch({ type: 'login/failure', error });
      }
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
