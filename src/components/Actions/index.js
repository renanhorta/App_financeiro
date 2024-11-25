import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native"

import {AntDesign} from "@expo/vector-icons"

export default function Actions() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="wallet" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="search1" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Pesquisar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="shoppingcart" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Comprar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>PLACEHOLDER</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>PLACEHOLDER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>PLACEHOLDER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>PLACEHOLDER</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton: {
       backgroundColor:"#ecf0f1",
       height:60,
       width:60,
       borderRadius:30,
       justifyContent:"center",
       alignItems:"center",
    },
    labelButton: {
       marginTop:4,
       textAlign:"center",
       fontWeight:"bold",
    },
});
