import { FormControl, FormGroup, InputLabel, Input, Typography,styled,Button} from '@mui/material'
import { useState } from 'react';
import { addUser } from '../service/api';

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto; 
    & > div {
      margin-top: 25px;
    }
`

const defaultValue = {
    name:'',
    username:'',
    email:'',
    phone:''
}

export default function AddUser() {

  const [user,setUser] = useState(defaultValue);

  const onValueChange = (e)=>{
      setUser({...user, [e.target.name] : e.target.value});
      console.log(e);
  }

  const addUserDetails = async ()=> {
    await addUser(user);
  }

  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel onChange={(e)=>onValueChange(e)} name="name">Name</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel onChange={(e)=>onValueChange(e)} name="username">UserName</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel onChange={(e)=>onValueChange(e)} name="email">Email</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel onChange={(e)=>onValueChange(e)} name="phone">Phone</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=> addUserDetails}>Add User</Button>
      </FormControl>
    </Container>
  )
}
