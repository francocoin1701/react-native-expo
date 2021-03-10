/*import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView, TextInput, StyleSheet, Button} from 'react-native'
import firebase from '../database/firebase'

function UserDetailScreen(props) {

    const initialState = {
        id: '',
        name: '',
        email: '',
        phone: ''
    }

    const [user, setUser] = useState(initialState)
    
    const getUserId = async (id)=>{
        const idRef = firebase.db.collection('nuevaCollection').doc(id)
        const doc = await idRef.get()
        const user = doc.data()
        setUser(user)
    }
    useEffect(()=>{
        getUserId(props.route.params.userId)
    },[])

    const handlechangeText = (name, value)=>{
        setUser({...user, [name]: value})
    };
    const deleteUser = async()=>{
        const dbref = firebase.db.collection('nuevaCollection').doc(props.route.params.userId);
        await dbref.delete();
        props.navigation.navigate('listaUsuarios')
    }
    
    const updateUser = async ()=>{
        const dbref = firebase.db.collection('nuevaCollection').doc(props.route.params.userId);
        await dbref.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        })
        setUser(initialState);
        props.navigation.navigate('listaUsuarios')
    }
    
    return (
        <ScrollView style={styles.container}>
        <View>
            <TextInput placeholder="name user" value={user.name} style={styles.inputGroup} onChangeText={(v)=> handlechangeText('name', v)}/>
        </View>
        <View>
            <TextInput placeholder="email user" value={user.email} style={styles.inputGroup} onChangeText={(v)=> handlechangeText('email', v)} />
        </View>
        <View>
            <TextInput placeholder="phone user" value={user.phone} style={styles.inputGroup} onChangeText={(v)=> handlechangeText('phone', v)} />
        </View>
        <View>
            <Button color="#4FFF33" title="udate user" onPress={()=> updateUser()}/>
        </View>
        <View>
            <Button  color="#FF4933" title="delete user" onPress={()=> deleteUser()}/>
        </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1
    },
    container: {
        flex: 1,
        padding: 35
    }
})
export default UserDetailScreen*/

import React,{useEffect, useState} from 'react'
import {View, ScrollView, StyleSheet, Button, TextInput} from 'react-native'
import firebase from '../database/firebase'

function UserDetailScreen(props) {
    const initialState = {
        id: "",
        name: "",
        email: "",
        phone: ""
    }

    const [user, setuser] = useState(initialState)

    const getUser = async(id)=>{
        const dbref = firebase.db.collection('nueva').doc(id)
        const doc = await dbref.get()
        const users = doc.data()
        setuser(users)
    }
    useEffect(()=>{
        getUser(props.route.params.userId)
    },[])

    const deleteUser = async()=>{
        const dbref = firebase.db.collection('nueva').doc(props.route.params.userId)
        await dbref.delete()
        props.navigation.navigate('userList')
    }
    const updateUser = async ()=>{
        const dbref = firebase.db.collection('nueva').doc(props.route.params.userId)
        await dbref.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        })
        setuser(initialState)
        props.navigation.navigate('userList')
    }
    const handlechangeText = (name, value)=>{
        setuser({...user, [name]: value})
    }

    return (
       <ScrollView style={styles.container}>
           <View style={styles.inputGroup} >
            <TextInput value={user.name} placeholder = "user name" onChangeText={(v)=>handlechangeText('name',v)}/>
           </View>
           <View style={styles.inputGroup}>
            <TextInput value={user.email} placeholder = "user email" onChangeText={(v)=>handlechangeText('email', v)}/>
           </View>
           <View style={styles.inputGroup}>
            <TextInput value={user.phone} placeholder = "user phone" onChangeText={(v)=>handlechangeText('phone',v)}/>
           </View>
           <View style={styles.inputGroup}>
               <Button color="#4FFF33" title="updateUser" onPress={()=>updateUser()}/>
           </View>
           <View>
               <Button color="#FF4933" title="deleteUser" onPress={()=>deleteUser()}/>
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
        borderBottomColor: "#cccccc"
    }
})

export default UserDetailScreen

