import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import GlobalStyle from '../utils/Style'
import { firebase } from '../../config'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 const handleSignUp = async ()=>{
    try{
      await firebase.auth().createUserWithEmailAndPassword(email,password)
    }catch(error){
      alert(error.message)
    }
  }

  return (
    <KeyboardAvoidingView className="flex-1 items-center justify-center">
      <Text style={GlobalStyle.formHeader}>Register Now</Text>
      <TextInput style={GlobalStyle.input} placeholder="Enter your email" onChangeText={(value) => setEmail(value)} autoCapitalize="none" autoCorrect={false}></TextInput>
      <TextInput style={GlobalStyle.input} placeholder="Enter your password" onChangeText={(value) => setPassword(value)} autoCapitalize="none" autoCorrect={false} secureTextEntry={true}></TextInput>
      <TouchableOpacity style={GlobalStyle.primaryButton} onPress={handleSignUp}>
        <Text style={GlobalStyle.primaryButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={GlobalStyle.secondaryButton} onPress={ ()=>{ navigation.replace('Login')}}>
        <Text style={GlobalStyle.secondaryButtonText}>Have an account? Login Here</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Login