import React from "react";
import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled, Button } from "@mui/material";

import { getUsers } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;
const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: white;
    font-size: 20px;
  }
`;
const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
              <Button variant="contained" color="secondary">
                Delete
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
}
