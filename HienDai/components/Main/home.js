import { Avatar, Text, TextInput } from "react-native-paper";
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    View,
} from "react-native";
import myStyles from "../../Styles/myStyles";
import styles from "./style";
import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { login } from "./../../configs/login_api";
import { MyUserContext, MyDispatcherContext } from "../../configs/Contexts";
import Footer from "./../share/footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import PaymentScreen from "../Payment/pay";
import map from "../traffic/map";
import SurveysList from "../reflect/surveys";

const HomeScreen = ({ navigation }) => {
    const [isPressed, setIsPressed] = useState(false);
    const user = useContext(MyUserContext);
    const dispatcher = useContext(MyDispatcherContext);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const token = await AsyncStorage.getItem("access_token");
            if (token) {
                const userData = await AsyncStorage.getItem("user");
                if (userData) {
                    dispatcher({
                        type: "login",
                        payload: { ...JSON.parse(userData), token },
                    });
                }
            } else {
                navigation.navigate("Login");
            }
        };
        checkLoginStatus();
    }, []);

    console.log("home: ", user);

    const nav = useNavigation();
    const handlePaymentPress = () => {
        nav.navigate(PaymentScreen); // Điều hướng đến màn hình thanh toán
    };

    return (
        <ImageBackground
            style={[styles.container]}
            source={require("../../assets/backgrondLogin.png")}
        >
            <StatusBar barStyle={"light-content"} />
            <ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <View style={[styles.header]}>
                        <View style={[styles.headerIconLeft]}>
                            <TextInput.Icon
                                icon="menu"
                                color={"#ab9570"}
                                size={30}
                            />
                        </View>

                        <Text style={[styles.nameHome]}>Hiền Vy</Text>
                        <View style={[styles.ringNumber]}>
                            <Text style={[styles.ringNum]}>1</Text>
                        </View>
                        <TouchableOpacity style={[styles.headerIconRight]}>
                            <TextInput.Icon
                                icon="bell-ring-outline"
                                color={"#ab9570"}
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.line]}>
                        <Text style={[styles.inline]}>
                            ................................................................................................
                        </Text>
                    </View>
                    <View style={[styles.hello]}>
                        <View style={[styles.helloHeart]}>
                            <TextInput.Icon
                                icon="heart"
                                size={20}
                                color={"#f3b15b"}
                            />
                        </View>
                        <Text style={[styles.helloText]}>
                            Xin chào, {user ? user.username : "Khách"}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={[
                            styles.introduceHome,
                            isPressed && styles.btnPressedOpacity,
                        ]}
                    >
                        <Avatar.Image
                            style={[styles.introduceHomeimg]}
                            size={40}
                            source={require("../../assets/loginHome.png")}
                        />
                        <View style={[styles.introduceHomeText]}>
                            <Text style={[styles.introduceHomeTextMain]}>
                                Khu chung cư Hiền Vy Home, Quận 1, TP.HCM
                            </Text>
                            <Text style={[styles.introduceHomeTextNote]}>
                                Hiền Vy Home
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.utilities]}>
                        <View style={[styles.utilitiesTow]}>
                            <TouchableOpacity
                                style={[
                                    styles.utilitiesChild,
                                    isPressed && styles.btnPressedOpacity,
                                ]}
                                onPress={() => {
                                    navigation.navigate("Uses");
                                }}
                            >
                                <TextInput.Icon
                                    icon="home-assistant"
                                    size={34}
                                    color={"#dcd3d1"}
                                    style={[styles.utilitiesIcon]}
                                />
                                <Text style={[styles.utilitiesText]}>
                                    Tiện ích
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.utilitiesChild,
                                    isPressed && styles.btnPressedOpacity,
                                ]}
                                onPress={() => {
                                    navigation.navigate("Service");
                                }}
                            >
                                <TextInput.Icon
                                    icon="cog"
                                    size={34}
                                    color={"#dcd3d1"}
                                    style={[styles.utilitiesIcon]}
                                />
                                <Text style={[styles.utilitiesText]}>
                                    Dịch vụ
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.utilitiesTow]}>
                            <TouchableOpacity
                                style={[
                                    styles.utilitiesChild,
                                    isPressed && styles.btnPressedOpacity,
                                ]}
                                onPress={handlePaymentPress}
                            >
                                <TextInput.Icon
                                    icon="cash-multiple"
                                    size={28}
                                    color={"#dcd3d1"}
                                    style={[styles.utilitiesIcon]}
                                />
                                <Text style={[styles.utilitiesText]}>
                                    Hoá đơn
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.utilitiesChild,
                                    isPressed && styles.btnPressedOpacity,
                                ]}
                                onPress={() => {
                                    navigation.navigate(SurveysList);
                                }}
                            >
                                <TextInput.Icon
                                    icon="email-outline"
                                    size={30}
                                    color={"#dcd3d1"}
                                    style={[styles.utilitiesIcon]}
                                />
                                <Text style={[styles.utilitiesText]}>
                                    Phản ánh
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.utilitiesTow]}>
                            <TouchableOpacity
                                style={[
                                    styles.utilitiesChild,
                                    isPressed && styles.btnPressedOpacity,
                                ]}
                                onPress={() => {
                                    navigation.navigate(map);
                                }}
                            >
                                <TextInput.Icon
                                    icon="car-back"
                                    size={34}
                                    color={"#dcd3d1"}
                                    style={[styles.utilitiesIcon]}
                                />
                                <Text style={[styles.utilitiesText]}>
                                    Giao thông
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <Footer />
        </ImageBackground>
    );
};

export default HomeScreen;
