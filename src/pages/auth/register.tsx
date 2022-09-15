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
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import trpc from '../../utils/tprc';
import type { CreateUserInput } from '../../schema/user';

function Register() {
  const router = useRouter();
  const { mutate } = trpc.useMutation(['users.register-user'], {
    onError: (error) => {},
    onSuccess: () => {
      router.push('/auth/login');
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserInput>();

  function onSubmit(values: CreateUserInput) {
    mutate(values);
  }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <Container maxW='container.sm' as='form' onSubmit={handleSubmit(onSubmit)}>
        <Heading mb={8}>Register</Heading>

        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor='name'>Full name</FormLabel>
          <Input
            id='name'
            placeholder='Your name'
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />

          {errors.name && <FormErrorMessage>{errors.name.message?.toString()}</FormErrorMessage>}
        </FormControl>
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
          <FormLabel htmlFor='name'>Password</FormLabel>
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
          Sign up
        </Button>
      </Container>
    </>
  );
}

export default Register;
