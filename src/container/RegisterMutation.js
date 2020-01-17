import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const SIGNUP = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const SignupMutation = ({ children }) => (
  <Mutation mutation={SIGNUP}>{children}</Mutation>
);
