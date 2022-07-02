import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import setUsers from "../Redux/actions/action";
import { Button } from '@chakra-ui/react'
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Heading,
    TableContainer,
  } from '@chakra-ui/react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
const Users = () => {

    let dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [counting, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    

    //this is the function to get the data from the backend
    const getData = async () => {
        result = await axios.get(`http://localhost:3001/users?page=${page}`);
        setData(result.data.data);
        dispatch(setUsers(result.data.data))
    }

    useEffect(() => {
        getData();
    }, []);

    //this is the pagination funciton.
    const previous = async () => {
        setPage((page) => {
            if (page === 1) return page;
            return page - 1;
        });
        result = await axios.get(`http://localhost:3001/users?page=${page}`);
        setData(result.data.data);
        dispatch(setUsers(result.data.data));
    }


    const handlenext = async () => {
        setPage((page) => {
            if (page === counting) return page;
            return page + 1;
        });
        result = await axios.get(`http://localhost:3001/users?page=${page}`);
        setData(result.data.data);
        dispatch(setUsers(result.data.data));
    }

    var result = useSelector((state) => state.cartReducer.listOfUsers);

 return (
  <>
  <Heading ml="430px" color="#B794F4">RECORDS OF USERS</Heading>
  <TableContainer >
  <Table  variant='striped' colorScheme='teal'>
    <Thead mr="50px">
      <Tr>
      <Th>Name</Th>
      <Th>Email</Th>
      <Th>Date</Th>
      <Th>Edit</Th>
      </Tr>
    </Thead>
    <Tbody>
        {
        result.map((e)=>(
    <Tr>
        <Td>{e.name}</Td>
        <Td>{e.email}</Td>
        <Td>{e.date}</Td>
        <Td>
        <Link to={`/users/${e._id}`}>
         <Button className="button-2" role="button">Edit</Button>
        </Link>
        </Td>
      </Tr>
        ))
}
  </Tbody>
  </Table>
</TableContainer>

<Box ml="500px">
    <Button bgColor="#FC8181" disabled={page === 1} onClick={previous}>previous</Button>
    <Button bgColor="#FC8181" disabled={page === counting} onClick={handlenext}>Next</Button>
</Box>

</>
    )
}
export default Users;