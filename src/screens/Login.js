import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import GlobalStyle from '../utils/Style'
import { useNavigation } from '@react-navigation/native';
import { firebase }  from '../../config'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  navigation = useNavigation()

  const handleLogin = async () =>{
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      alert(error.message)
    }
  }
 
  return (
    <KeyboardAvoidingView className="flex-1 items-center justify-center">
      <Text style={GlobalStyle.formHeader}>Login Now</Text>
      <TextInput style={GlobalStyle.input} value={email} onChangeText={(value) => setEmail(value)} placeholder="Enter your email" autoCapitalize="none" autoCorrect={false}></TextInput>
      <TextInput style={GlobalStyle.input} value={password} onChangeText={(value)=> setPassword(value)} placeholder="Enter your password" autoCapitalize="none" autoCorrect={false} secureTextEntry={true}></TextInput>
      <TouchableOpacity style={GlobalStyle.primaryButton} onPress={handleLogin}>
        <Text style={GlobalStyle.primaryButtonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={GlobalStyle.secondaryButton} onPress={ ()=>{ navigation.replace('Register')}}>
        <Text style={GlobalStyle.secondaryButtonText}>Don't have an account? Register Here</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Login