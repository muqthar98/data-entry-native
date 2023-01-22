import { View, Text,Button, StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import { TextField,Card} from '@mui/material'
import axios from 'axios'


const AddUser = ({navigation}) => {
  const [name,setName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [itemName,setItemName] = useState('')
  const [advanceAmount,setAdvanceAmount] = useState('')
  const [balanceAmount,setBalanceAmount] = useState('')
  const [isPaid,setIsPaid] = useState('')
  const [address,setAddress] = useState('')


  const createUser = () => {
    axios.post("http://localhost:5000/user/register",{name,phoneNumber,itemName,advanceAmount,balanceAmount,isPaid,address}) 
    setName('')
    setPhoneNumber('')
    setItemName('')
    setAdvanceAmount('')
    setBalanceAmount('')
    setIsPaid('')
    setAddress('')
 }
  

  return (
    <View>
      <Card style={styles.container}>
      <TextField id="outlined-basic" label="Name" variant="outlined" style={{marginBottom:'15px',marginTop:'10px'}} onChange={(event)=>setName(event.target.value)} value={name}/>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" style={{marginBottom:'15px'}} onChange={(event)=>setPhoneNumber(event.target.value)} value={phoneNumber}/>
      <TextField id="outlined-basic" label="Item Name" variant="outlined" style={{marginBottom:'15px'}} onChange={(event)=>setItemName(event.target.value)} value={itemName}/>
      <TextField id="outlined-basic" label="Advance Amount" variant="outlined" style={{marginBottom:'15px'}} onChange={(event)=>setAdvanceAmount(event.target.value)} value={advanceAmount}/>
      <TextField id="outlined-basic" label="Balance Amount" variant="outlined" style={{marginBottom:'15px'}} onChange={(event)=>setBalanceAmount(event.target.value)} value={balanceAmount}/>
      <TextField id="outlined-basic" label="IsPaid" variant="outlined" style={{marginBottom:'15px'}} onChange={(event)=>setIsPaid(event.target.value)} value={isPaid}/>
      <TextField id="outlined-basic" label="Address" variant="outlined" style={{marginBottom:'15px'}} onChange={(event)=>setAddress(event.target.value)} value={address}/>
      <View style={styles.button}>
      <Button title='Add' onPress={createUser}/>
      </View>
      <View style={styles.button}>
      <Button title="Update" onPress={() => navigation.navigate('EditUser')}/>
      </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     marginTop: '5px',
     padding: '5px',
     textAlign: 'center'
  },
  button: {
    marginBottom:5,
    padding: 2
  }
})

export default AddUser