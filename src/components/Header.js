import React from 'react'
import { StyleSheet, Text,View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header : {
        backgroundColor: '#111',
        width: '100vw',
        height: 50,
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center'
    },
    text : {
        color:'white'
    }
})

export default Header