import react from 'react';
import {Pressable} from 'react-native';

const ColorScreen = ({route, navigation})=>{
    const {couleur} =route.params;
    return(
        <Pressablestyle={{
            backgroundColor: couleur,
            flex:1 ,
        }}
        onPress={()=> navigation.goBack()}
    )
}
export default ColorScreen ; 