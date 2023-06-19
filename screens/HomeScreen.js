import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from "../components/Header"
import MovieCards from '../components/MovieCards'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1, marginTop:30, backgroundColor:"#F0F0F0"}}>
      <MovieCards/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})