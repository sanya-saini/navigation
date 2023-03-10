import React from "react";
import { Text, View, Pressable } from "react-native";
import {useNavigation} from '@react-navigation/native'; // jis page se navigate krna h, uss page pr usenavigation hook import krni h
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    const navigation = useNavigation(); // variable for hook
    const onClick = () => {
        navigation.navigate('signup'); // jis page pr jana h
    };
    return (
        <SafeAreaView>
            <Text style={styles.txt}>Login Page</Text>
            <Pressable style={styles.btn} onPress={onClick}>
            <Text style={styles.txt1}>To Signup</Text>
            </Pressable>
        </SafeAreaView>

    )

};

export default Login;