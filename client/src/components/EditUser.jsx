import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useState,useEffect } from "react";
import { addUser, getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 25px;
  }
`;

const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

export default function EditUser() {
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails=async()=>{
    const respone = await getUser(id);
  }

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" id="my-input" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" id="my-input" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" id="my-input" />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addUserDetails()}
        >
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
}
