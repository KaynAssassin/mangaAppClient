import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';

export default function CategoryItem(props){
    return <View style={styles.component}>
        <TouchableOpacity>
            <Text>Component</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    component:{
        padding:20,
        borderColor:"#60232a",
        backgroundColor:"#62993d"
    }
})