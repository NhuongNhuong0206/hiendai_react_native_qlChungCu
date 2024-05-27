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
import { useState, useContext } from "react";
import { login } from "./../../configs/login_api";
import { MyUserContext } from "../../configs/Contexts";
import Footer from "./../share/footer";

const HomeScreen = ({ navigation }) => {
    const [isPressed, setIsPressed] = useState(false);
    const [opacity, setOpacity] = useState({}); // State để lưu trữ trạng thái của mỗi view
    const user = useContext(MyUserContext);
    console.log("home: ", user);

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
                            ,
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
                                123456
                            </Text>
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
                                    ,
                                    isPressed && styles.btnPressedOpacity,
                                ]}
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
                                    ,
                                    isPressed && styles.btnPressedOpacity,
                                ]}
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
                                    ,
                                    isPressed && styles.btnPressedOpacity,
                                ]}
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
