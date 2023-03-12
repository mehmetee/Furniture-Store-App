import { StyleSheet } from "react-native";
import {COLORS,SIZES,FONTS} from '../../../constants'

export default StyleSheet.create({
//Home Styles
    container:{
        flex:1,
        backgroundColor:COLORS.white,
    },

    //Render header
    headerContainer:{
        paddingHorizontal:SIZES.padding,
        paddingVertical:30,
        paddingBottom:0 
    },
    headerinnerContainer:{
        flexDirection:'row'
    },
    headerMenuButton:{
        flex:0,
    },
    headerMenuImage:{
        width:25,
        height:25,
        alignSelf:'flex-end',
        resizeMode:'contain'
    },
    headerCartButton:{
        flex:1,
        alignItems:'flex-end'
    },
    headerCartImage:{
        width:25,
        height:25,
        alignSelf:'flex-end',
    },

    //Render Title
    renderTitleContainer:{
        marginTop:SIZES.padding,
        marginHorizontal:SIZES.padding
    },
    renderCollactionTitle:{
        color:"black",
        ...FONTS.largeTitle,
         fontWeight:'bold'
    },
    renderCollactionName:{
        color:"black",
        ...FONTS.largeTitle,
        fontWeight:'bold'
    },

    //Footer
    footerContainer:{
        flexDirection:'row',
        marginHorizontal:SIZES.padding,
        padding:SIZES.radius,
        height:110,
        borderRadius:20,
        backgroundColor:COLORS.white
    },
    shadow:{
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.32,
        shadowRadius:5.46,
        elevation:9,
    },
    footerSofaImageContainer:{
        width:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.lightGray2,
        borderRadius:20
    },
    footerSofaImage:{
        width:"60%",
        height:"60%",
        resizeMode:'contain',
    },
    footerTextContainer:{
        flex:1,
        marginLeft:SIZES.radius,
        justifyContent:'center',
    },
    footerText1:{
        color:COLORS.black,
        ...FONTS.h2,
        fontWeight:'bold' 
    },
    footerText2:{
        ...FONTS.body3
    },
    footerChevronButtonContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginRight:SIZES.radius
    },
    footerChevronButton:{
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:"70%",
        backgroundColor:COLORS.primary,
        borderRadius:10,
    },
    footerChevronImage:{
        resizeMode:'contain',
        width:"50%",
        height:"50%",
    }


})