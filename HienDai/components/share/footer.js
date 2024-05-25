import { Avatar, Button, TextInput } from "react-native-paper";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import * as React from "react";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { MyUserContext } from "../../configs/Contexts";

const Footer = () => {
    // const user = useContext(MyUserContext);
    const nav = useNavigation();
    const [isPressed, setIsPressed] = useState(false);
    const [loading, setLoading] = React.useState(false);
    return (
        <View style={[styles.bottom]}>
            <View style={[styles.bottomIcon]}>
                <Button
                    style={[
                        styles.bottomF,
                        isPressed && styles.btnLoginfatherPressed,
                    ]}
                    loading={loading}
                    icon={"home"}
                    onPress={() => {
                        nav.navigate("HomeScreen");
                    }}
                ></Button>
            </View>
            <View style={[styles.bottomIcon]}>
                <Button
                    style={[
                        styles.bottomF,
                        isPressed && styles.btnLoginfatherPressed,
                    ]}
                    loading={loading}
                    icon={"phone"}
                    onPress={() => {
                        nav.navigate("InfoUser");
                    }}
                ></Button>
            </View>
            <View style={[styles.bottomIcon]}>
                <Button
                    style={[
                        styles.bottomF,
                        isPressed && styles.btnLoginfatherPressed,
                    ]}
                    loading={loading}
                    icon={"account"}
                    onPress={() => {
                        nav.navigate("InfoUser");
                    }}
                ></Button>
            </View>
        </View>
    );
};

export default Footer;
