import React from 'react';
import useInput from '../../hooks/useInput';
import { Form, Input, Button, Title, ErrorMsg } from './UserForm.style';

const UserForm = ({ submit, title, error, disabled }) => {
  const email = useInput('');
  const password = useInput('');

  const handleSubmit = e => {
    e.preventDefault();

    submit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          type="password"
          placeholder="Password"
          {...password}
        />
        <Button disabled={disabled} type="submit">
          {title}
        </Button>
      </Form>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </>
  );
};

export default UserForm;
