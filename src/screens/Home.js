import React, { useState, useEffect } from 'react'
import {Text, SafeAreaView, TouchableOpacity } from 'react-native'
import GlobalStyle from '../utils/Style'
import { firebase } from '../../config'

const Home = () => {
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser(firebase.auth().currentUser)
  }, [])

  const handleLogout = async ()=>{
    try {
      await firebase.auth().signOut()
    } catch (error) {
      alert(error.message)
    }
  }
  
  return (
    <SafeAreaView className="flex-1 items-center justify-center space-y-6">
      <Text>
        Your Email is: <Text style={GlobalStyle.secondaryButtonText}>{user?.email}</Text>
      </Text>
      <TouchableOpacity style={GlobalStyle.primaryButton} onPress={handleLogout}>
        <Text style={GlobalStyle.primaryButtonText}>Sing Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home