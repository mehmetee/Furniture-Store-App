import React from "react";
import { FlatList, Image, SafeAreaView,Text,TouchableOpacity,View } from "react-native";

import {COLORS, FONTS, icons, images, SIZES} from '../../../constants'
import styles from "./Home_pages.styles";

function Homepages({navigation}){
    
    const [tabList,setTabList]=React.useState([
        {
            id:0,
            name:'Chair',
            title:'chairs',
            productList:[
                {
                productId:1,
                productName:'Chair Green Colour',
                price:10.00,
                image:images.greenChair
                
                },
                {
                    productId:2,
                    productName:'Chair Peach Colour',
                    price:10.00,
                    image:images.redChair
                    },
                    {
                        productId:3,
                        productName:'Chair White Colour',
                        price:10.00,
                        image:images.whiteChair
                        
                        }
            ]
        },
        {
            id:1,
            name:'Cupboard',
            title:'cupboards',
            productList:[
                {
                productId:4,
                productName:'Product 4',
                price:10.00,
                image:images.redChair
                
                },
                {
                    productId:5,
                    productName:'Product 5',
                    price:10.00,
                    image:images.redChair
                    },
                    {
                        productId:3,
                        productName:'Product 6',
                        price:10.00,
                        image:images.redChair
                        
                        }
            ]
        },
        {
            id:2,
            name:'Table',
            title:'tables',
            productList:[
                {
                productId:7,
                productName:'Product 7',
                price:10.00,
                image:images.redChair
                
                },
                {
                    productId:8,
                    productName:'Product 8',
                    price:10.00,
                    image:images.redChair
                    },
                    {
                        productId:9,
                        productName:'Product 9',
                        price:10.00,
                        image:images.redChair
                        
                        }
            ]
        },
        {
            id:3,
            name:'Accessories',
            title:'accessories',
            productList:[
                {
                productId:10,
                productName:'Product 10',
                price:10.00,
                image:images.redChair
                
                },
                {
                    productId:11,
                    productName:'Product 11',
                    price:10.00,
                    image:images.redChair
                    },
                    {
                        productId:12,
                        productName:'Product 12',
                        price:10.00,
                        image:images.redChair
                        
                        }
            ]
        }
    ])

    const [selectedTab,setSelectedTab]=React.useState({
        id:0,
        name:'Chair',
        title:'chairs',
        productList:[
            {
            productId:1,
            productName:'Chair Green Colour',
            price:10.00,
            image:images.greenChair
            
            },
            {
                productId:2,
                productName:'Chair Peach Colour',
                price:10.00,
                image:images.redChair
                },
                {
                    productId:3,
                    productName:'Chair White Colour',
                    price:10.00,
                    image:images.whiteChair
                    
                    }
        ]
    })
    const ScrollableTab=({tabList,selectedTab,onPress})=>{
        const renderItem=({item})=>(
            <TouchableOpacity style={{marginHorizontal:SIZES.padding}}
            onPress={()=>onPress(item)}
            >
                <Text style={{color:COLORS.secondary,...FONTS.body2}}>{item.name}</Text>
                {
                    selectedTab.id == item.id &&
                    <View style={{alignItems:'center',marginTop:SIZES.base}}>
                        <View style={{width:10,height:10,borderRadius:5,backgroundColor:COLORS.blue}}></View>
                    </View>
                }
            </TouchableOpacity>
        )
        return(
            <View style={{marginTop:SIZES.base}}>
                <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal
                data={tabList}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id}
                />
            </View>
        )
    }

    const ScrollableCard=({navigation,productList})=>{
        const renderCard=({item})=>(
            <TouchableOpacity style={{marginLeft:SIZES.padding}} onPress={()=>{navigation.navigate('Detail',{"itemInfo":item})}}>
                <View style={{width:SIZES.width/1.8}}>
                    <Image 
                    source={item.image}
                    resizeMode={'cover'}
                    style={{width:'100%',height:"100%", borderRadius:SIZES.radius}}
                    />

                    <View style={{position:'absolute',top:15,left:'10%',right:'10%'}}>
                        <Text style={{color:COLORS.lightGray2,...FONTS.h3}}>Furniture</Text>
                        <Text style={{marginTop:SIZES.base,color:COLORS.white,...FONTS.h2}}>{item.productName}</Text>
                    </View>
                    <View style={{position:'absolute',bottom:10,left:10,paddingVertical:10,paddingHorizontal:15,backgroundColor:COLORS.transparentLightGray, borderRadius:20,}}>
                        <Text style={{...FONTS.h2}}>$ {item.price.toFixed(2)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
        return(
            <View style={{marginTop:SIZES.base}}> 
                  <FlatList 
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={productList}
                  renderItem={renderCard}
                  keyExtractor={item=>item.productId}
                  />
            </View>
        )
    }

    //Render
    const renderHeader=()=>{
        return(
            <View style={styles.headerContainer}>
                <View style={styles.headerinnerContainer}>
                    <TouchableOpacity style={styles.headerMenuButton} onPress={()=>console.log('Menu on Click')}>
                        <Image source={icons.menu}
                        style={styles.headerMenuImage}
                        />
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerCartButton} onPress={()=>console.log('Cart on click')} >
                        <Image source={icons.cart}
                        resizeMode={'contain'}
                        style={styles.headerCartImage}
                        />
                        
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //renderTitle
    const renderTitle=(title)=>{
        return(
        <View style={styles.renderTitleContainer}>
            <Text style={styles.renderCollactionTitle}>Collaction of</Text>
            <Text style={styles.renderCollactionName}>{title}</Text>
        </View>
        ); 
    }

    /*Footer- promotion Card */
    const renderPromotionCard=()=>{

        return(
            <View style={[styles.shadow,styles.footerContainer]}>
                <View style={styles.footerSofaImageContainer}>
                    <Image source={images.sofa}
                    style={styles.footerSofaImage} />
                </View>
                <View style={styles.footerTextContainer}>
                    <Text style={styles.footerText1}>Special offer</Text>
                    <Text style={styles.footerText2}>Adding to your cart</Text>
                </View>

                <View style={styles.footerChevronButtonContainer}>
                    <TouchableOpacity 
                    style={styles.footerChevronButton}
                    onPress={()=>{console.log("pressed")}}>
                        <Image source={icons.chevron}
                        style={styles.footerChevronImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    return(
        <SafeAreaView style={styles.container}>
          
            {renderHeader()}
            {renderTitle(selectedTab.title)}
            <ScrollableTab 
            tabList={tabList}
            selectedTab={selectedTab}
            onPress={(item)=>setSelectedTab(item )}
            />
            <View style={{flex:1}}>
                <ScrollableCard 
                    navigation={navigation}
                    productList={selectedTab.productList}     
                />
            </View>

            {/*Footer- promotion Card */}
            <View style={{height:"19%",justifyContent:'space-around'}}>
                {renderPromotionCard()}
            </View>
        </SafeAreaView>
    )
}
export default Homepages;