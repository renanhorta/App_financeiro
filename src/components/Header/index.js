import React from "react";
import{
    View, StyleSheet, Text, StatusBar,
    TouchableOpacity,
    Button
} from "react-native"

import {Feather} from "@expo/vector-icons"

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                {/* <View style={styles.menu}>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Feather name="menu" size={27} color="#FFF" style={{ margin: 0, padding: 0 }} />
                </TouchableOpacity>
                <Text style={styles.username}>Olá, {name}</Text>
                </View>
                <Button
                onPress={()=>{}}
                title="Transações"
                color="#841584"
                /> */}
                <Text style={styles.username}>Olá, {name}</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                <Feather name="menu" size={27} color="#FFF" style={{ margin: 0, padding: 0 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#8000ff",
        paddingTop: StatusBarHeight,
        flexDirection:'row',
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:44,
    },
    content:{
        flex: 1,
        alignItems: "center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    menu:{
        flex:1,
        gap:8,
        flexDirection:"row",
        justifyContent: "flex-start",
        alignItems: "center", 
    }
    ,username:{
        fontSize:18,
        color:"#FFF",
        fontWeight:"bold",
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: "rgba(255,255,255,0.5)",
        justifyContent: "center",
        alignItems: "center",   
        borderRadius: 22,      
        padding: 0,          
        borderWidth: 1, 
        borderColor: "rgba(255,255,255,0.5)",
    },
})