import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    ImageBackground,
    FlatList,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
} from '../constance/AppConstance.js';
import BottomTabs from '../screens/BottomTabs.js';
import { Appbar, Card ,Avatar} from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import StarRating from 'react-native-star-rating';



function Discover({ navigation }) {

    const [friendslist , setfriendslist] = useState([
        {
            id:1
        },
    
       
    ])
    const [ data , setdata ] = useState([
        {
            id:1
        },
        {
            id:2
        },
        {
                id:3
        }
    ])

const renderFriendslist = () =>{
    return(

        <Avatar.Image
        source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
        }}
        size={13}
    >
    </Avatar.Image>         )
}
// backgroundColor:'#f4f4f5'
const renderlist = () =>{
    return(<View style={{borderWidth:0.5,justifyContent:'center',alignSelf:'center', borderRadius:10,marginLeft:5,marginBottom:10, padding:8, borderColor:'#D0D3D4' ,flexDirection:'row', backgroundColor:'#f4f4f5'}}>
            
        <View>

        <Image
                                style={{ width: 75, height: 76,}} resizeMethod='resize' resizeMode='stretch'
                                source={require('../Resources/Appicon.png')} />
        </View>

        <View style={{flexDirection:'column',marginLeft:10, marginTop:3, }}>

        <Text style={{fontSize:14}}>Services</Text>
        <Text style={{fontSize:12, color:'#f14057' }}>Utility</Text>
        <View style={{flexDirection:'row'}}>
        <Rating
          imageSize={10}

/>
<Text style={{fontSize:10}}>129</Text>
        

        </View>
        <Text style={{fontSize:12 , marginBottom:1,marginTop:3,}}>Friends using this:</Text>
        <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={friendslist}
                horizontal={true}

                renderItem={renderFriendslist}
                keyExtractor={(item,id) => id.toString()}
                 />
        </View>

    </View>
    );
}




const renderlist2 = () =>{
    return(<View style={{borderWidth:0.5,justifyContent:'center',alignSelf:'center', borderRadius:10,marginLeft:5,marginBottom:10, padding:8, borderColor:'#D0D3D4' ,flexDirection:'row', backgroundColor:'#f4f4f5'}}>
            
        <View>

        <Image
                                style={{ width: 75, height: 76,}}resizeMethod='resize' resizeMode='stretch'
                                source={require('../Resources/AppGame.png')} />
        </View>

        <View style={{flexDirection:'column' , marginLeft:10, marginTop:3, }}>

        <Text style={{fontSize:14}}>Services</Text>
        <Text style={{fontSize:12, color:'#f14057' }}>Utility</Text>
        <View style={{flexDirection:'row'}}>
        <Rating
          imageSize={10}

/>
<Text style={{fontSize:10}}>129</Text>
        

        </View>
       
        <Text style={{fontSize:12 , marginBottom:1,marginTop:3,}}>Friends using this:</Text>
            <FlatList
horizontal
pagingEnabled={true}
showsHorizontalScrollIndicator={false}
                    contentInsetAdjustmentBehavior="automatic"
                    data={friendslist}
                    renderItem={renderFriendslist}
                    keyExtractor={(item,id) => id.toString()}
                     />
            
        </View>

    </View>
    );
}

    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:'white'}}>
            {/* <View style={{ backgroundColor: 'white', width: '100%', height: deviceHeight * 0.08, paddingHorizontal: 13, flexDirection: 'column' }}> */}

                {/* <View style={{ width: '100%', height: deviceHeight * 0.07, marginTop: 5, flexDirection: 'row' }}>

                    <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                        <TouchableOpacity
                            style={{ alignSelf: 'flex-start' }}
                            onPress={() => {
                                navigation.navigate('DrawerContent');
                            }}

                        >
                            <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                        <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>Service Store</Text>
                    </View>

                    <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                        <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>

                            <TouchableOpacity
                                style={{ alignSelf: 'flex-end', marginLeft: 40 }}

                            >
                                <Image style={{ width: 21, height: 21, alignSelf: 'center', resizeMode: 'contain', marginRight: 20 }} source={require('../images/bell.png')} />
                            </TouchableOpacity>
                        </View>


                    </View>



                </View> */}

            {/* </View> */}
            {/* <View style={{ height: deviceHeight * 0.1, backgroundColor: 'white', width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: "space-between" }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ServicesStore');
                        }}
                    >
                        <Text style={{ color: '#FE1459', fontSize: 15, fontWeight: 'bold' }}> Discover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Categories');
                        }}
                    >
                        <Text style={{ color: '#A6A8BA', fontWeight: 'bold', fontSize: 15 }}>Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MyServices');
                        }}
                    >
                        <Text style={{ color: '#A6A8BA', fontWeight: 'bold', fontSize: 15 }}>My Services</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            <View style={{ height: deviceHeight * 0.065, backgroundColor: 'white', width: "100%",justifyContent:'center', alignItems: 'center', }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: "space-between" }}>
                    <TouchableOpacity >
                        <Text style={{ color: '#292F58', fontSize: 14, alignSelf:'center', fontWeight: 'bold' }}>New Services</Text>
                    </TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>

                        <TouchableOpacity style={{ paddingRight: 15 }}
                            onPress={() => {
                                navigation.navigate('NewServices');
                            }}
                        >
                            <Text style={{ color: '#4D7099', fontWeight: 'bold', fontSize: 12 }}>See All</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  >
                            <Image style={{ width: 18, height: 18, alignSelf: 'center', resizeMode: 'contain', marginRight: 3 }} source={require('../images/search.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView >
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ShopingList');
                    }}>
                    <ImageBackground source={require('../Resources/studying.jpg')}
                        imageStyle={{ borderRadius: 12  }} style={{ height:deviceHeight * 0.25, width: "100%", alignSelf:'center' }} 
                    >
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                          
                          
                            <View style={{ alignSelf: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)',justifyContent: 'center', height: '100%', borderRadius: 12, width: "50%" }}>
                                <View style={{ width: "90%", height: '100%', padding: 2, alignSelf: 'center',  justifyContent:'center' }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>gigaaa</Text>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>new list of:</Text>

                                    <Text style={{ color: 'white', fontSize: 12,fontWeight:'bold',  width:'80%' }}>Don’t forget anything with our new list service</Text>
                                    <View style={{flexDirection:'row'}}>
        {/* <Rating
                  type='custom'

          imageSize={10}

          ratingBackgroundColor='#c8c7c8'


/> */}
 <StarRating
        disabled={false}
        maxStars={5}
        rating={5}
        starSize={12}
    containerStyle={{ paddingVertical:4}}
        fullStarColor={'#f1c40f'}
        emptyStarColor={'black'}
        // selectedStar={(rating) => this.onStarRatingPress(rating)}
      /> 
                                <Text style={{fontSize:10, color:'white',marginTop:4, marginLeft:5,}}>129</Text>
        

                                 </View>
                                    <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', width: '99%', alignSelf: 'center', justifyContent: "space-between" }}>
                                            <TouchableOpacity >
                                                <Text style={{ color: '#52FFEC', fontSize: 12,  }}>Shopping</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                                <Text style={{ color: '#52FFEC', fontSize: 12 }}>Tasks</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                                <Text style={{ color: '#52FFEC',  fontSize: 12 }}>Articles</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={{ color: 'white',marginTop:5, fontWeight: 'bold', fontSize: 12 }}>Gigaaa development services</Text>
                                </View>

                            </View>





                            <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: "50%" }}>
                                <View style={{  height: "80%", justifyContent: 'flex-end', }}>
                                    <View style={{ justifyContent: 'space-between', marginRight:10, flexDirection: 'row' }}>
                                        <View style={{ display: 'flex',  flexDirection: 'row' }}>
                                            <Image
                                                style={{ width: 30, height: 30, alignSelf:'center'}}
                                                source={require('../images/Menu_gigaaa_Mic_Inactive.png')} />
                                            <Text style={{ color: 'white', width: 70,alignSelf:'center', fontWeight: 'bold',paddingHorizontal:4, fontSize: 10 }}>Created by gigaaa</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Friends using this:</Text>
                                            <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={friendslist}
                horizontal={true}

                renderItem={renderFriendslist}
                keyExtractor={(item,id) => id.toString()}
                 />
    
                                        </View>

                                    </View>


                                </View>
                            </View>
                        </View>
                    </ImageBackground>
               
                </TouchableOpacity>


            <View style={{ backgroundColor:'white', paddingVertical:7, }}>
           
            <FlatList
                    data={data}
                    horizontal={true}
                    contentContainerStyle={{paddingHorizontal:10}}
                    renderItem={renderlist}
                    keyExtractor={(item,id) => id.toString()}
                     /> 


            </View>
                {/* <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                >
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Text>129</Text>
                            </View>
                            <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                            <Image
                                style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                source={require('../images/friends.jpg')} />

                        </View>

                    </View>
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Text>129</Text>
                            </View>
                            <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                            <Image
                                style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                source={require('../images/friends.jpg')} />

                        </View>

                    </View>
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Text>129</Text>
                            </View>
                            <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                            <Image
                                style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                source={require('../images/friends.jpg')} />

                        </View>

                    </View>

                </ScrollView>
                */}
               
               
                <View style={{ width: "90%",backgroundColor:'white', display: 'flex', flexDirection: 'row', height: deviceHeight * 0.04, justifyContent: 'space-between', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ color: '#292F58', fontSize: 14 }}>Games</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: '#4D7099', fontSize: 12 }}>See All</Text>
                    </TouchableOpacity>

                </View>
                <ImageBackground source={require('../Resources/friends.jpg')}
                        imageStyle={{ borderRadius: 12  }} style={{ height: deviceHeight*0.25, width: "100%", }}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                          
                          
                            <View style={{ alignSelf: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)', justifyContent: 'center', height: '100%', borderRadius: 12, width: "50%" }}>
                                <View style={{ width: "90%", height: '100%', padding: 2, alignSelf: 'center',  justifyContent:'center' }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>It's play</Text>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>time</Text>

                                    <Text style={{ color: 'white', fontSize: 12, width:'80%' }}>Beat your friends and your score</Text>
                                    <View style={{flexDirection:'row', paddingVertical:5}}>
        {/* <Rating

          imageSize={10}

                    

/> */}
{/* <AirbnbRating
  count={5}
  starContainerStyle={{backgroundColor:null}}
   size={10}
/> */}
 <StarRating
        disabled={false}
        maxStars={5}
        rating={5}
        starSize={12}
    containerStyle={{ paddingVertical:4}}
        fullStarColor={'#f1c40f'}
        emptyStarColor={'black'}
        // selectedStar={(rating) => this.onStarRatingPress(rating)}
      /> 
                                <Text style={{fontSize:10, color:'white',marginTop:4, marginLeft:5,}}>88</Text>
        
        

                                 </View>
                                    <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', width: '100%', alignSelf: 'center', justifyContent: "space-between" }}>
                                            <TouchableOpacity >
                                                <Text style={{ color: '#52FFEC', fontSize: 12,  }}>Entertainment</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                                <Text style={{ color: '#52FFEC', fontSize: 12 }}>Friends</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                                <Text style={{ color: '#52FFEC',  fontSize: 12 }}>Words</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                            </View>





                            <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', width: "50%" }}>
                                <View style={{ height: "80%", justifyContent: 'flex-end', }}>
                                    <View style={{ justifyContent: 'space-between', marginRight:10, flexDirection: 'row' }}>
                                        <View style={{ display: 'flex',  flexDirection: 'row' }}>
                                            <Image
                                                style={{ width: 30, height: 30, alignSelf:'center'}}
                                                source={require('../images/Menu_gigaaa_Mic_Inactive.png')} />
                                            <Text style={{ color: 'white', width: 70,alignSelf:'center', fontWeight: 'bold',paddingHorizontal:4, fontSize: 10 }}>Created by gigaaa</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Friends using this:</Text>
                                            <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={friendslist}
                horizontal={true}

                renderItem={renderFriendslist}
                keyExtractor={(item,id) => id.toString()}
                 />
    
                                        </View>

                                    </View>


                                </View>
                            </View>
                        </View>
                    </ImageBackground>
               
                {/* <ImageBackground source={require('../Resources/friends.jpg')}
                    imageStyle={{ borderRadius: 15 }} style={{ height: 250, width: "100%" }}
                >
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ alignSelf: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)', justifyContent: 'center', height: 250, borderRadius: 20, width: "50%" }}>
                            <View style={{ width: "80%", height: 240, padding: 10, alignSelf: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>It’s play time</Text>
                                <Text style={{ color: 'white', fontSize: 12 }}>Beat your friends and your score</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center', resizeMode: 'contain', marginRight: 5 }} source={require('../images/star.png')} />
                                    <Text style={{ color: 'white', fontSize: 20 }}>88</Text>
                                </View>
                                <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', alignSelf: 'center', justifyContent: "space-between" }}>
                                        <TouchableOpacity >
                                            <Text style={{ color: '#52FFEC', fontSize: 9, fontWeight: 'bold' }}>Entertainment</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity >
                                            <Text style={{ color: '#52FFEC', fontWeight: 'bold', fontSize: 9 }}>Friends</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity >
                                            <Text style={{ color: '#52FFEC', fontWeight: 'bold', fontSize: 9 }}>Words</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10, width: "50%" }}>
                            <View style={{ width: "100%", height: "80%", justifyContent: 'flex-end', }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <View style={{ display: 'flex', marginTop: 10, flexDirection: 'row' }}>
                                        <Image
                                            style={{ width: 30, height: 30, }}
                                            source={require('../images/Menu_gigaaa_Mic_Inactive.png')} />
                                        <Text style={{ color: 'white', width: 70, fontWeight: 'bold', fontSize: 10 }}>Created by gigaaa</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}>Friends using this:</Text>
                                        <Image
                                            style={{ width: 100, height: 30, borderRadius: 10 }}
                                            source={require('../images/friends.jpg')} />
                                    </View>

                                </View>


                            </View>
                        </View>
                    </View>
                </ImageBackground> */}


                <View style={{ backgroundColor:'white', paddingVertical:7, }}>
            
            <FlatList
                    data={data}
                    horizontal={true}
                    contentContainerStyle={{paddingHorizontal:10}}
                    renderItem={renderlist2}
                    keyExtractor={(item,id) => id.toString()}
                     />


            </View>

<View style={{height:70}}>

</View>
                {/* <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                >
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/AppGame.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Text>129</Text>
                            </View>
                            <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                            <Image
                                style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                source={require('../images/friends.jpg')} />

                        </View>

                    </View>
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/AppGame.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Text>129</Text>
                            </View>
                            <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                            <Image
                                style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                source={require('../images/friends.jpg')} />

                        </View>

                    </View>
                    <View style={{ height: 120, backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 1, borderWidth: 0.1, width: 215, display: 'flex', flexDirection: 'row', margin: 5 }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 100, height: 120, borderRadius: 10 }}
                                source={require('../Resources/AppGame.png')} />
                        </View>
                        <View style={{ height: 100, width: 100, alignSelf: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 15 }}>Service</Text>
                            <Text style={{ fontSize: 15 }}>Utility</Text>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                <Text>129</Text>
                            </View>
                            <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                            <Image
                                style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                source={require('../images/friends.jpg')} />

                        </View>

                    </View>

                </ScrollView>
      */}
     
            </ScrollView>
            <BottomTabs />
        </SafeAreaView>
    )
}

export default Discover;
