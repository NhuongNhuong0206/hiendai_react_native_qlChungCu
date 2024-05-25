import { Avatar, TextInput } from "react-native-paper";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import * as React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Hearder = (props) => {
    const ob = props.info;
    console.log(ob);
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation();
    const backHome = () => {
        navigation.navigate("HomeScreen");
    };
    return (
        <View>
            <View style={[styles.header]}>
                <View>
                    <TextInput.Icon
                        icon="arrow-left"
                        color={"#ab9570"}
                        size={30}
                    />
                </View>
                <Text style={[styles.nameHome]}>Hiền Vy</Text>

                <View style={[styles.ringNumber]}>
                    <Text style={[styles.ringNum]}>1</Text>
                </View>
                <View style={[styles.headerIconRight]}>
                    <TextInput.Icon
                        icon="bell-ring-outline"
                        color={"#ab9570"}
                        size={30}
                    />
                </View>
            </View>
            <View style={[styles.line]}>
                <Text style={[styles.inline]}>
                    ................................................................................................
                </Text>
            </View>
            <View style={[styles.hello]}>
                <View style={[styles.helloHeart]}>
                    <TextInput.Icon icon="heart" size={20} color={"#f3b15b"} />
                </View>
                <Text style={[styles.helloText]}>
                    Xin chào
                    {/* {user.username} */}
                </Text>
            </View>
            <TouchableOpacity
                style={[
                    styles.introduceHome,
                    ,
                    isPressed && styles.btnPressedOpacity,
                ]}
                onPress={backHome}
            >
                <Avatar.Image
                    style={[styles.introduceHomeimg]}
                    size={40}
                    source={require("../../assets/loginHome.png")}
                />
                <View style={[styles.introduceHomeText]}>
                    <Text style={[styles.introduceHomeTextMain]}>123456</Text>
                    <Text style={[styles.introduceHomeTextNote]}>
                        Hiền Vy Home
                    </Text>
                </View>
                <View style={[styles.introduceHomeIcon]}>
                    <TextInput.Icon
                        icon="menu-right"
                        size={50}
                        color={"#dcd3d1"}
                        style={[styles.introduceHomeInIcon]}
                    />
                </View>
            </TouchableOpacity>
            <View style={[styles.line]}>
                <Text style={[styles.inline]}>
                    ................................................................................................
                </Text>
            </View>
            <Text style={[styles.text]}>{ob}</Text>
        </View>
    );
};

export default Hearder;
