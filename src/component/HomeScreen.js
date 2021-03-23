import React from 'react';
import {FlatList , View} from 'react-native';
import {colors} from '../utils/colorsUtils';


const HomeScreen=()=>{
    return(
        <View style={{flex:1,alignitems:'center'}}>
            <FlatList
            data={colors}
            renderItem={({item})=> <ColorsScreen color={item}/>}
            keyExtractor={(item ,index)=>index}
            numColumns={3}
            horizontal={false}/>
        </View>
    );

};
export default HomeScreen ;