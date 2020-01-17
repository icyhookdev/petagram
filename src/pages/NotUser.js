import React, { useContext } from 'react';
import { Context } from '../Context';
import UserForm from '../components/UserForm/UserForm';
import { SignupMutation } from '../container/RegisterMutation';
import { SigninMutation } from '../container/LoginMutation';

const Notuser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <SignupMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
          };

          const errorMsg =
            error && 'User Already Exist or Something went wrong';
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              submit={onSubmit}
              title="Sign Up"
            />
          );
        }}
      </SignupMutation>
      <SigninMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };

          const errorMsg = error && 'Please Check your credentials';
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              submit={onSubmit}
              title="Sign In"
            />
          );
        }}
      </SigninMutation>
    </>
  );
};

export default Notuser;
