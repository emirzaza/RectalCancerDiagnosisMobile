import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { mainpage, history, accountCenter } from '../components/screens';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // İkonlar için

const Tab = createBottomTabNavigator();

const LogoutButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.logoutButton} onPress={onPress}>
            <Icon name="logout" size={24} color="#fff" />
            <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
    );
};

const userStack = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: styles.tabBar,
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Anasayfa') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Eski İşlemler') {
                        iconName = 'history';
                    } else if (route.name === 'Hesap Merkezi') {
                        iconName = 'account-outline';
                    }

                    return (
                        <Icon
                            name={iconName}
                            size={24}
                            color={focused ? '#007bff' : '#808080'}
                        />
                    );
                },
                headerShown: false,
                tabBarShowLabel: false,
            })}
        >
            <Tab.Screen name="Anasayfa" component={mainpage} />
            <Tab.Screen name="Eski İşlemler" component={history} />
            <Tab.Screen name="Hesap Merkezi" component={accountCenter} />
            <Tab.Screen
                name="Log Out"
                component={() => null} // Boş bir bileşen çünkü Logout bağımsızdır
                options={{
                    tabBarButton: (props) => <LogoutButton {...props} onPress={handleLogout} />,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        height: 70,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    logoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff4d4d', // Kırmızı renk
        borderRadius: 40,
        height: 50,
        width: 50,
        marginBottom: 10,
        position: 'absolute',
        right: 20, // Sağda yerleştirmek için
    },
    logoutText: {
        fontSize: 10,
        color: '#fff',
    },
});

export default userStack;
