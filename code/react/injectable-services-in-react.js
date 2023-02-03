// auth-service.jsx
import React from 'react';

const { createContext, useContext } = React;

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const value = {
    signIn: props.signIn || signIn,
    signUp: props.signUp || signUp,
  };

  return (
    <AuthProvider.Provider value={value}>
      {props.children}
    </AuthProvider.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const signUp = (body) => {
  return fetch({
    method: 'POST',
    url: `${API}/sign-up`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

// auth-components.test.jsx
import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import { SignInButton, SignUpButton } from './auth-components';

describe('SignInButton', () => {
  test('invokes callback on successful sign-in', () => {
    const onSignIn = jest.fn();

    const { getByTestId } = render(
      <AuthProvider signIn={Promise.resolve}>
        <SignInButton onSignIn={onSignIn} />
      </AuthProvider>
    );

    // ...
  });
});

describe('SignUpButton', () => {
  test('invokes callback on successful sign-up', () => {
    const onSignUp = jest.fn();

    const { getByTestId } = render(
      <AuthProvider signUp={Promise.resolve}>
        <SignUpButton onSignUp={onSignUp} />
      </AuthProvider>
    );

    // ...
  });
});
export const signIn = (body) => {
  return fetch({
    method: 'POST',
    url: `${API}/sign-in`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

// auth-components.jsx
import React from 'react';
import { useAuth } from './auth-service'

const { useCallback } = React;

export const SignInButton = ({ username, password, onSignIn }) => {
  const auth = useAuth();

  const signIn = useCallback(() => {
    auth.signIn({ username, password }).then(onSignIn);
  }, [username, password, onSignIn]);

  // ...
};

export const SignInButton = ({ username, password, verifiedPass, onSignUp }) => {
  const auth = useAuth();

  const signUp = useCallback(() => {
    auth.signUp({ username, password, verifiedPass }).then(onSignUp);
  }, [username, password, verifiedPass, onSignUp]);

  // ...
};

https://medium.com/the-guild/injectable-services-in-react-de0136b6d476
