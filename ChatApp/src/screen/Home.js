import React, { useLayoutEffect } from 'react';
import { Alert, Image, StyleSheet } from 'react-native';
import { LogOut } from '../connection';
import { clearAsyncStorage } from '../asyncStorage';
import TabNavigator from '../navigation/TabNavigator';
import images from '../utils/images';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => Alert.alert('Logout', 'Are you sure to logout', [
                        {
                            text: 'Yes',
                            onPress: () => logout(),
                        },
                        {
                            text: 'No',

                        },
                    ],
                        {
                            cancelable: false,
                        },
                    )
                    }>
                    <Image
                        source={images.LOGOUT_LOGO}
                        style={styles.logo}
                        name="logout"
                    />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const logout = () => {
        LogOut()
            .then(() => {
                clearAsyncStorage()
                    .then(() => {
                        navigation.replace('Loding');
                    })
                    .catch((err) => alert(err))
            })
            .catch((err) => alert(err))
    }
    return (

        <TabNavigator />

    );
}
export default Home;

const styles = StyleSheet.create({
    logo: {
        height: 30,
        width: 30,
        marginRight: 10,
    },


})