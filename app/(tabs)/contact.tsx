import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '@/constants/Login ';
import { useRouter, useLocalSearchParams } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';



export default function Contact() {
    const router = useRouter(); //useRouter
    const {name, major,email} = useLocalSearchParams(); //uesLocalSearchParams

  return (
    <LinearGradient colors={['#b1a9ff','#a3fbff','#7bb1ff']} style={Login.container}>
      <Text>Go Back</Text>
      <Text> Name : {name} </Text>
      <Text> Major : {major} </Text>
      <Text> Email : {email} </Text>
      <Button title='Back' onPress={()=> router.back()}/>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({})