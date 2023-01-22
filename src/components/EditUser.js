import { View, StyleSheet, Button } from 'react-native'
import { TextField,Card } from '@mui/material'
import React from 'react'

const EditUser = () => {
  return (
    <View>
      <Card style={styles.container}>
      <TextField id="outlined-basic" label="Name" variant="outlined" style={{marginBottom:'15px',marginTop:'10px'}}/>
      <TextField id="outlined-basic" label="Mobile" variant="outlined" style={{marginBottom:'15px'}}/>
      <TextField id="outlined-basic" label="Item Name" variant="outlined" style={{marginBottom:'15px'}}/>
      <TextField id="outlined-basic" label="Advance Amount" variant="outlined" style={{marginBottom:'15px'}}/>
      <TextField id="outlined-basic" label="Balance Amount" variant="outlined" style={{marginBottom:'15px'}}/>
      <TextField id="outlined-basic" label="Paid" variant="outlined" style={{marginBottom:'15px'}}/>
      <TextField id="outlined-basic" label="Address" variant="outlined" style={{marginBottom:'15px'}}/>
      <View style={{padding:5}}>
      <Button title='Update'/>
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
    }
})

export default EditUser