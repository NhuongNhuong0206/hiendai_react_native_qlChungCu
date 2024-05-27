import { Avatar, Button, TextInput } from "react-native-paper";
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    View,
    Alert,
    Text,
} from "react-native";
import styles from "./styles";
import * as React from "react";
import { useState, useContext } from "react";
import Input from "../share/Input";
import Hearder from "../share/Header";
import APIs, { endpoints } from "../../configs/APIs";
import { useNavigation } from "@react-navigation/native";
import { MyDispatcherContext, MyUserContext } from "../../configs/Contexts";
import Footer from "../share/footer";

const InfoUser = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [area, setArea] = useState("");
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const nav = useNavigation();

    const user = useContext(MyUserContext);
    const avatar = user ? user.avatar : "";
    const token = user ? user.token : null;
    const dispatcher = useContext(MyDispatcherContext);
    // useEffect(() => {
    //     getData();
    // }, []);

    const handleLogout = () => {
        dispatcher({
            type: "logout",
        });

        Alert.alert(
            "Đăng xuất",
            "Bạn có chắc chắn muốn đăng xuất?",
            [
                {
                    text: "Không",
                    style: "cancel",
                },
                {
                    text: "Đăng xuất",
                    onPress: async () => {
                        nav.replace("Login");
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const handleAvatarPress = () => {
        Alert.alert("Hình đại diện", "Bạn đã nhấn vào hình đại diện.");
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
                    <Hearder info={"Thông tin cá nhân"} />
                    <View style={styles.contentContainer}>
                        <TouchableOpacity onPress={handleAvatarPress}>
                            <Avatar.Image
                                size={44}
                                source={{ uri: avatar }}
                                style={styles.avatar}
                            />
                        </TouchableOpacity>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Họ và tên: </Text>
                            <Text style={styles.value}>Nguyễn Thị Hiền Vy</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Ngày sinh:</Text>
                            <Text style={styles.value}></Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Giới tính:</Text>
                            <Text style={styles.value}></Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Số điện thoại:</Text>
                            <Text style={styles.value}></Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Ngày hết hạn:</Text>
                            <Text style={styles.value}></Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Số căn hộ:</Text>
                            <Text style={styles.value}></Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>CMND/CCCD:</Text>
                            <Text style={styles.value}></Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <Button
                mode="contained"
                style={styles.logoutButton}
                onPress={handleLogout}
            >
                Đăng xuất
            </Button>
            <Footer />
        </ImageBackground>
    );
};
export default InfoUser;
