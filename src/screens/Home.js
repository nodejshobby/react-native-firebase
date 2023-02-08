import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalStyle from '../utils/Style'
import firebase from '../../firebase'

const Home = () => {
  const [user, setUser] = useState('')

  useEffect(async () => {
   try {
    const authUser = await firebase.auth().currentUser
    setUser(authUser)
   }catch(error){
    alert(error.message)
   }
  }, [])

  const handleLogout = async ()=>{
    try {
      
    } catch (error) {
      alert(error.message)
    }
  }
  
  return (
    <SafeAreaView className="flex-1 items-center justify-center space-y-4">
      <Text>
        Your Email is: {user?.email}
      </Text>
      <TouchableOpacity style={GlobalStyle.secondaryButton} onPress={handleLogout}>
        <Text style={GlobalStyle.secondaryButtonText}>Sing Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home