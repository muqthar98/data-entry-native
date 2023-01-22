import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Fab } from '@mui/material'
import EditIcon from "@mui/icons-material/Edit"
import { useState,useEffect } from 'react'
import axios from 'axios'

const Home = ({ navigation }) => {
    const[users,setUsers] = useState('')

    const getUsers = () => {
        axios.get("http://localhost:5000/user/getAllUsers")
        .then(data => setUsers(data.data))
        .catch(err=> console.log(err.message))
    }

    console.log("usersdata",users)

    useEffect(() => {
        getUsers()
    }, [])

  return (
    <View style={styles.container}>
        <Fab color="secondary" aria-label="edit" onClick={() => navigation.navigate('AddUser')}>
        <EditIcon/>
        </Fab>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
        position : 'absolute',
        top : '540px',
        right: '10px'
    }
})

export default Home