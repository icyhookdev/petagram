import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const SIGNIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const SigninMutation = ({ children }) => (
  <Mutation mutation={SIGNIN}>{children}</Mutation>
);
