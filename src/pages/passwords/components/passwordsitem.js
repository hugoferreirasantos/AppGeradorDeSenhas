import React, { useState } from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export function PasswordItem({data, removePassword}){
    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    }

    return(
        <View style={styles.container}>
            <Pressable onLongPress={removePassword}>
                <Text style={styles.text}>{isHidden ? data.replace(/./g, '*') : data}</Text>
            </Pressable>
            <Pressable onPress={toggleVisibility}>
                <Ionicons name={isHidden ? 'eye-off' : 'eye'} size={24} color="#FFF" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0E0E0E",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text:{
        color: "#FFF"
    }
})
