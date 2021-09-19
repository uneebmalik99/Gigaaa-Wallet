import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {

    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../components/context';

export function DrawerContent({ props, navigation }) {




    return (
        <View style={{ display: 'flex', backgroundColor:'red', flexDirection: 'row', flex: 1 }}>
            <View style={{
                flex: 1, width: '70%', backgroundColor: '#2F3B64', 
            }}>
                <View style={{ padding: 20 }}>
                    <TouchableOpacity
                        style={{ alignSelf: 'flex-start' }}
                        onPress={() => {
                            navigation.navigate('ServicesStore');
                        }}
                    >
                        <Image style={{ width: 30, height: 30, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/lessthen.png')} />
                    </TouchableOpacity>
                </View>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={{
                                        uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                    }}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>User Name</Title>
                                    <Caption style={styles.caption}>user ID 20736</Caption>
                                </View>
                            </View>

                            <View >
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>user@icloud.com</Paragraph>
                                </View>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>811.599.9090</Paragraph>
                                </View>
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <View style={{ borderBottomWidth: 1, borderColor: "white", width: "90%", alignSelf: 'center' }}>
                                <View style={{ alignSelf: 'flex-start', padding: 5 }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start' }}
                                        onPress={() => {
                                            navigation.navigate('Home');
                                        }}

                                    >
                                        <Text style={{ color: 'white' }}>Home</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start', padding: 5 }}
                                        onPress={() => {
                                            navigation.navigate('ServicesStore');
                                        }}

                                    >
                                        <Text style={{ color: 'white', }}>News & Actualizations</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start', padding: 5 }}
                                        onPress={() => {
                                            navigation.navigate('ServicesStore');
                                        }}

                                    >
                                        <Text style={{ color: 'white', }}>Service Store</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: "white", width: "90%", alignSelf: 'center' }}>
                                <View style={{ alignSelf: 'flex-start', padding: 5 }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start' }}
                                        onPress={() => {
                                            navigation.navigate('ServicesStore');
                                        }}

                                    >
                                        <Text style={{ color: 'white', }}>GIGs</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start', padding: 5 }}
                                        onPress={() => {
                                            navigation.navigate('ServicesStore');
                                        }}

                                    >
                                        <Text style={{ color: 'white', }}>Messenger</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start', padding: 5 }}
                                        onPress={() => {
                                            navigation.navigate('ServicesStore');
                                        }}

                                    >
                                        <Text style={{ color: 'white', }}>Wallet</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start', padding: 5 }}
                                        onPress={() => {
                                            navigation.navigate('ServicesStore');
                                        }}

                                    >
                                        <Text style={{ color: 'white', }}>Smart Home</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: "white", width: "90%", alignSelf: 'center' }}>
                                <View style={{ alignSelf: 'flex-start', padding: 5 }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start' }}
                                        onPress={() => {
                                            navigation.navigate('ServicesStore');
                                        }}

                                    >
                                        <Text style={{ color: 'white', }}>Configurations</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start', padding: 5 }}
                                        onPress={() => {
                                            navigation.navigate('ServicesStore');
                                        }}

                                    >
                                        <Text style={{ color: 'white', }}>FAQ</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start', padding: 5 }}
                                        onPress={() => {
                                            navigation.navigate('ServicesStore');
                                        }}

                                    >
                                        <Text style={{ color: 'white', }}>Retro</Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <TouchableOpacity
                                        style={{ alignSelf: 'flex-start', padding: 5 }}
                                        onPress={() => {
                                            navigation.navigate('ServicesStore');
                                        }}

                                    >
                                        <Text style={{ color: 'white', }}>About</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>


                            <View style={{ height: 50, width: 120, justifyContent: 'center', alignItems: 'center', marginTop: 150, marginLeft: 30, backgroundColor: '#FE1459' }}>
                                <TouchableOpacity style={{ height: 50, width: 120, alignItems: 'center', justifyContent: 'center' }}
                                    onPress={() => {
                                        navigation.navigate('ServicesStore');
                                    }}
                                >
                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Logout</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginLeft: 30, marginTop: 20 }}><Text style={{ color: 'white', }}>V 3.3.1</Text></View>
                        </Drawer.Section>

                    </View>
                </DrawerContentScrollView>

            </View>

            <TouchableOpacity style={{ width: '40%' }}
                onPress={() => {
                    navigation.navigate('ServicesStore');
                }}
            >
                <View ></View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        color: 'white',
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        color: 'white',
        fontSize: 14,
        lineHeight: 14,
    },
    row: {

        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 5,

    },
    bottomDrawerSection: {

        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});