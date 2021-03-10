/*import React, {useEffect, useState} from 'react'
import {View, Text, Button} from 'react-native'
import firebase from '../database/firebase'
import { ScrollView } from 'react-native-gesture-handler';
import {ListItem, Avatar} from 'react-native-elements'

function UserList(props) {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        firebase.db.collection('nuevaCollection').onSnapshot(querySnapshot => {
            const users = []
            querySnapshot.docs.forEach(doc=>{
                const {name, email, phone} = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                });
            });
            setUsers(users)
        })
    },[])
    return (
        <ScrollView>
            <Button title="create user" onPress={()=>props.navigation.navigate("creaUsuarios")}/>
            {
                users.map((user) =>{
                    return (
                        <ListItem key = {user.id} bottomDivider onPress={()=>props.navigation.navigate('detalleUsuarios',{userId: user.id})}>
                            <ListItem.Chevron/>
                            <Avatar source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}} rounded/>
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}

export default UserList*/

import React,{useState, useEffect} from 'react'
import { Button, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {ListItem, Avatar} from 'react-native-elements'
import firebase from '../database/firebase'

function UserList(props) {

    const [user, setUser] = useState([])

    useEffect(()=>{
        firebase.db.collection('nueva').onSnapshot(querySnapshot => {
            const users = [];
            querySnapshot.docs.forEach(doc =>{
                const {name,email,phone} = doc.data();
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            })
            setUser(users)
        })
    },[])

    return (
        <ScrollView>
            <Button title='createUser'/>
            {
                user.map(usuario => {
                   return (
                    <ListItem key = {usuario.id} bottomDivider onPress={()=>props.navigation.navigate('userDetail',{userId: usuario.id})}>
                    <ListItem.Chevron/>
                    <Avatar source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}} rounded/>
                    <ListItem.Content>
                        <ListItem.Title>{usuario.name}</ListItem.Title>
                        <ListItem.Subtitle>{usuario.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    </ListItem>
                   )
                })
            }

        </ScrollView>
    )
}

export default UserList

