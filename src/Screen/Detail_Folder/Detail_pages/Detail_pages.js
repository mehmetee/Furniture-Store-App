import React from "react";
import { Image, ImageBackground, SafeAreaView,TouchableOpacity,Text, View } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../../constants";

import styles from "./Detail_pages.styles";

function Detailpages({route,navigation}){

    //Render
    function renderInfo(){
        let {itemInfo}=route.params;
        if(itemInfo){
          return(
            <ImageBackground 
            source={itemInfo.image}
            resizeMode='cover'
            style={{width:'100%',height:'100%'}}
            >
                <View style={{marginTop:SIZES.padding *2,marginHorizontal:SIZES.padding}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{flex:1,alignItems:'flex-start',justifyContent:'center'}} onPress={()=>{console.log('menu on click')}}>
                            <Image source={icons.menu}
                            resizeMode='contain'
                            style={{width:30,height:30,tintColor:COLORS.white}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1,alignItems:'flex-end',justifyContent:'center'}} onPress={()=>{console.log('Search on click')}}>
                        <Image source={icons.search}
                            resizeMode='contain'
                            style={{width:30,height:30,tintColor:COLORS.white}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/*Product Tag */}
                <View 
                style={{
                    position:'absolute', top:'30%',left:'23%',borderRadius:80,
                    backgroundColor:COLORS.transparentLightGray,height:40,width:40,
                    alignItems:'center',justifyContent:'center'
                }}
                >
                    <View style={{
                        borderRadius:20,
                        backgroundColor:COLORS.blue,
                        height:10,
                        width:10,
                    }}>
                    </View>
                </View>    
                    <View style={{
                            position:'absolute',top:'27%',left:'37%',flexDirection:'row',
                            padding:SIZES.radius*1.5,backgroundColor:COLORS.transparentLightGray1,width:'55%',borderRadius:10
                    }}>
                        <View style={{flex:2}}>
                            <Text style={{color:COLORS.darkGray,...FONTS.h3}}>{itemInfo.productName}</Text>
                        </View> 
                        <View style={{flex:1.3,alignItems:'flex-end',justifyContent:'flex-end'}}>
                            <Text style={{color:COLORS.darkGray,...FONTS.h3}}>$ {itemInfo.price.toFixed(2)}</Text>
                        </View> 
                    </View>
                <View style={{position:'absolute',bottom:'20%',left:SIZES.padding,right:SIZES.padding}}> 
                <Text style={{color:COLORS.lightGray2,...FONTS.body2}}>Furniture</Text>
                <Text style={{color:COLORS.white,...FONTS.h2,marginTop:SIZES.radius}}>{itemInfo.productName}</Text>
                </View>
            </ImageBackground>
          )  
        }
        else{
            <View></View>
        }
    }

    function renderFooter(){
        return(
            <View style={{position:'absolute',bottom:'5%',left:SIZES.padding,right:SIZES.padding,flexDirection:'row',height:70,backgroundColor:'white',borderRadius:35}}>
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}> 
                    <TouchableOpacity 
                    onPress={()=>{navigation.goBack()}}
                    >
                        <Image source={icons.dashboard}
                        resizeMode='cover'
                        style={{width:25,height:25,tintColor:COLORS.gray}}
                        />
                    </TouchableOpacity>  
                </View>    
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{backgroundColor:COLORS.primary,height:50,width:50,alignItems:'center',justifyContent:'center',borderRadius:10}} onPress={()=>{console.log('Plus on click')}}>
                        <Image source={icons.plus}
                        resizeMode='cover'
                        style={{width:20,height:20,tintColor:'white'}}
                        />
                    </TouchableOpacity>
                </View>     
                <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{console.log('User on click')}}>
                        <Image source={icons.user}
                        resizeMode='cover'
                        style={{width:25,height:25,tintColor:COLORS.gray}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
           {renderInfo()}
           {renderFooter()}
        </SafeAreaView>
    );
}

export default Detailpages;