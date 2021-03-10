/*import React, {useState} from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';
//import { Value } from 'react-native-reanimated';
import firebase from '../database/firebase'

function CreateUserScreen(props) {
    
    const [state, setState] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value})
    };
    const addNewUser = async ()=>{
        if(state.name === ''){
            alert('all space must fill')
        }else{
           await firebase.db.collection('useres').add({
                name: state.name,
                phone: state.phone,
                email: state.email
            })
            props.navigation.navigate('listaUsuarios')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder='name user'
                    onChangeText={(v)=> handleChangeText('name',v)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder= 'phone User'
                    onChangeText = {(v)=> handleChangeText('phone', v)} 
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder= 'email user'
                    onChangeText = {(v)=> handleChangeText('email', v)}
                />
            </View>
            <View>
                <Button title="save user" onPress={()=>{
                    addNewUser()
                }}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 35
    },

    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15, 
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateUserScreen*/

import React,{useState} from 'react'
import {View,TextInput, Button, StyleSheet, ScrollView} from 'react-native'
import firebase from '../database/firebase'

function CreateUserScreen(props) {
    
    const [state, setState] = useState( {
        id: '',
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value)=>{
        setState({...state, [name]: value})
    }

    const createUser = async()=>{
        if(state.name === ''){
            alert('todos los campos deben estar llenos')
        }else{
            await firebase.db.collection('nueva').add({
                name: state.name,
                email: state.email,
                phone: state.phone
            })
            props.navigation.navigate('userList')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="name user" onChangeText={(v)=> handleChangeText("name", v)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="email user" onChangeText={(v)=> handleChangeText("email", v)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="phone user" onChangeText={(v)=> handleChangeText("phone", v)}/>
            </View>
            <View>
                <Button title="save user" onPress={()=> createUser()}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    }
}) 

export default CreateUserScreen


