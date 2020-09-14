import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import {deviceSize} from "../size/index";
import {colors} from "../colors/index";

export default function CategoryItem(props){
    return (
            <TouchableOpacity delayLongPress={500}>
                <View style={styles.categoryItemView}>
                    <Text style={styles.categoryItemText}>Chapter 1</Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryItemView:{
        backgroundColor: colors.secondary,
        alignItems:'center',
        justifyContent: 'center',
        width: deviceSize.deviceWidth*0.5,
        height: deviceSize.deviceHeight*0.1,
        borderWidth: 3,
        borderColor:colors.tertiary,
        padding: 2,
        marginStart : 2,
        marginEnd : 2
    },
    categoryItemText:{
        fontSize:18,
    }
})