import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Form(props) {

       //this is the navigation which is imported from the navigation.
        const navigate = useNavigate();

        const { id } = useParams();

        //this is the useState hook for storing the text of input box.
        const [data, setData] = useState({
            email: "",
            name: "",
        });
    
        //this is the funciton to get the value from the input box
        const handleChange = (e) => {
            const { name, value } = e.target;
            setData({ ...data, [name]: value })
        }
    
        //this is the function to edit the data of users
        const submit = async () => {
            const response = await axios.patch(`http://localhost:3001/users/${id}`, data)
            alert("Your data has been updated");
            navigate('/');
        }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Edit your details</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl n>
                <FormLabel>Name</FormLabel>
                <Input name="name" onChange={handleChange} type="text" />
              </FormControl>
              <FormControl   >
                <FormLabel>Email</FormLabel>
                <Input name="email" onChange={handleChange} type="email" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                onClick={submit} 
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }