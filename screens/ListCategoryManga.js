import React from 'react';
import {Text,StyleSheet,View,FlatList,ActivityIndicator,Alert,BackHandler} from 'react-native';
import CategoryItem from "../components/CategoryItem";
import {deviceSize} from "../size/index";
import {colors} from "../colors/index";
import loadCategoryList from "../api/categoryListApi";


const styles = StyleSheet.create({
    chapterListView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primary
    }
})

const loadCategories = () =>{
    loadCategoryList().get("/get-category-list").then(res =>{
        console.log(res)
    })
}

export default class ListCategoryManga extends React.Component{
    
    constructor(props){
        super(props)
        this.CategoryList = loadCategories();
    }
    
    render(){
        return(
            <View>
                <Text>Hello</Text>
            </View>
        );
    }
    
}
