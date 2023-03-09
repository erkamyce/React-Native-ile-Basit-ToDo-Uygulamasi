import { StyleSheet, Text, TouchableOpacity, View ,SafeAreaView,TextInput} from 'react-native';
import React ,{ Component } from 'react';

const ItemList = ({ text}) => {
    return <View style = {style.card}><Text>{text}</Text></View>
}

const style = StyleSheet.create({
    card:{
        padding:10,
        backgroundColor:'#ffebcd',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:30,
    }

})
export default ItemList;