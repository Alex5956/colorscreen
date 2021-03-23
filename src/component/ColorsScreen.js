import React from 'react';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ColorsScreen=({color})=>{
    const navigation=useNavigation();
    return (
        <Pressable
        style={{
            backgroundColor:color,
            width:110,
            height:60,
            margin:10, 
        }}
        onPress={()=>navigation.navigate('Color',{couleur:color})}/>
        );
    
};
export default ColorsScreen ; 