import Head from 'next/head';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Container,
  Heading,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit() {
    // TODO
  }

  return (
    <>
      <Head>Login</Head>

      <Container maxW='container.sm' as='form' onSubmit={handleSubmit(onSubmit)}>
        <Heading mb={8}>Login</Heading>

        <FormControl mt={4} isInvalid={!!errors.email}>
          <FormLabel htmlFor='name'>Your email</FormLabel>
          <Input
            id='email'
            type='email'
            placeholder='Your email'
            {...register('email', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />

          {errors.email && <FormErrorMessage>{errors.email.message?.toString()}</FormErrorMessage>}
        </FormControl>
        <FormControl mt={4} isInvalid={!!errors.email}>
          <FormLabel htmlFor='name'>Your email</FormLabel>
          <Input
            id='password'
            type='password'
            placeholder='Your password'
            {...register('password', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />

          {errors.password && (
            <FormErrorMessage>{errors.password.message?.toString()}</FormErrorMessage>
          )}
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Login
        </Button>
      </Container>
    </>
  );
}

export default Login;
