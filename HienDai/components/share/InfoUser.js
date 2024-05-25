import { Button, TextInput } from "react-native-paper";
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    View,
    Alert,
} from "react-native";
import styles from "./styles";
import * as React from "react";
import { useState, useContext } from "react";
import Input from "../share/Input";
import Hearder from "../share/Header";
import APIs, { endpoints } from "../../configs/APIs";
import { useNavigation } from "@react-navigation/native";
import { MyUserContext } from "../../configs/Contexts";
import Footer from "../share/footer";

const InfoUser = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [area, setArea] = useState("");
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const nav = useNavigation();
    // const user = useContext(MyUserContext);
    // const CardCar = async () => {
    //     setLoading(true);
    //     const payload = {
    //         area: area,
    //     };
    //     let esc = encodeURIComponent;
    //     let query = Object.keys(payload)
    //         .map((k) => esc(k) + "=" + esc(payload[k]))
    //         .join("&");

    //     console.log(query);

    //     try {
    //         let res = await APIs({
    //             method: "post",
    //             url: endpoints.carCard,
    //             withCredentials: true,
    //             crossdomain: true,
    //             data: query,
    //             headers: {
    //                 Authorization: `Bearer ${user.token}`,
    //             },
    //         });

    //         console.log(res.status);
    //         if (res.status === 201) {
    //             Alert.alert(
    //                 "Đăng kí thành công",
    //                 "Gửi xét duyệt thành công",
    //                 [
    //                     {
    //                         text: "OK",
    //                         onPress: () => nav.navigate("HomeScreen"),
    //                     },
    //                 ],
    //                 { cancelable: false }
    //             );
    //         }
    //     } catch (ex) {
    //         Alert.alert(
    //             "Không thành công",
    //             "Số lượng thẻ vượt quá giới hạn, xoá bớt",
    //             [
    //                 {
    //                     text: "OK",
    //                     onPress: () => nav.navigate("DeleteCarCard"),
    //                 },
    //             ],
    //             { cancelable: false }
    //         );
    //     } finally {
    //         setLoading(false);
    //     }
    // };
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
                </KeyboardAvoidingView>
            </ScrollView>
            <Footer />
        </ImageBackground>
    );
};
export default InfoUser;
