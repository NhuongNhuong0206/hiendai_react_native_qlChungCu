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
    Text,
    FlatList,
    Image,
} from "react-native";
import styles from "./styles";
import * as React from "react";
import { useState, useContext, useEffect } from "react";
import Input from "../share/Input";
import Hearder from "../share/Header";
import axios from "axios";
import APIs, { authAPI, endpoints } from "../../configs/APIs";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MyUserContext } from "../../configs/Contexts";
import Footer from "../share/footer";
import { it } from "date-fns/locale/it";
import HomeScreen from "../Main/home";
import CreateGoodss from "./creategoodss";
import moment from "moment";
const ViewGoodss = () => {
    const [reload, setReload] = useState(false);
    const nav = useNavigation();
    const user = useContext(MyUserContext);
    const [DataListBox, setDataListBox] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            fetchDataBox();
        }, [reload])
    );
    const fetchDataBox = async () => {
        try {
            let res = await APIs({
                method: "get",
                url: endpoints.ListGoodssOfUser,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            console.log(res);
            setDataListBox(res.data);
        } catch (ex) {
            Alert.alert(
                "Xoá lỗi",
                "Quay lại trang chủ",
                [
                    {
                        text: "OK",
                        onPress: () => {
                            nav.navigate("HomeScreen");
                        },
                    },
                ],
                { cancelable: false }
            );
        }
    };
    const getBackgroundColor = (receivedGoods) => {
        switch (receivedGoods) {
            case "Chờ nhận hàng":
                return "#FFCCCC"; // Màu đỏ nhạt
            case "Đã lấy hàng":
                return "#FFFF99"; // Màu vàng nhạt
            case "Người dùng đã nhận được hàng":
                return "#CCFFCC"; // Màu xanh lá cây nhạt
            default:
                return "#FFFFFF"; // Màu trắng (mặc định)
        }
    };
    const changeStatus = async ({ item }) => {
        setDataListBox((prev) => {
            const newDataListBox = prev.map((data) => {
                if (data.id == item.id) {
                    data.received_Goods = "Người dùng đã nhận được hàng";
                }
                return data;
            });

            return newDataListBox;
        });
    };
    const renderItemGoodss = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.cardContainer,
                {
                    backgroundColor: getBackgroundColor(item.received_Goods),
                },
            ]}
            onPress={() => {
                if (item.received_Goods === "Đã lấy hàng") {
                    Alert.alert(
                        "Bạn đã nhận được hàng?",
                        " ",
                        [
                            {
                                text: "Chưa",
                                style: "cancel",
                            },
                            {
                                text: "Rồi",
                                onPress: () => {
                                    changeStatus({ item });
                                },
                            },
                        ],
                        { cancelable: false }
                    );
                } else {
                    // Có thể hiển thị thông báo hoặc thực hiện hành động khác nếu cần
                    console.log("Không thể nhấn vào item này");
                }
            }}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.img_goods }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.complexName}>
                    Tên hàng: {item.name_goods}
                </Text>
                <Text style={styles.areaText}>Kích thước: {item.size}</Text>
                <Text style={styles.areaText}>
                    Ngày nhận: {moment(item.created_date).format("DD/MM/YYYY")}
                </Text>
                <Text style={styles.areaText}>
                    Trạng thái: {item.received_Goods}
                </Text>
                {item.received_Goods === "Đã lấy hàng" && (
                    <Text style={styles.thank}>
                        Xác nhận đã lấy hàng khỏi tủ đồ
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );

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
                    <Hearder info={"Thông tin tủ đồ điện tử"} />
                    <View style={styles.containerText}>
                        <TouchableOpacity
                            style={styles.TopBtn}
                            title="Đăng ý nhận hàng"
                            onPress={() => {
                                nav.navigate(CreateGoodss);
                            }}
                        >
                            <Text style={styles.TopBtnText}>
                                + Đăng kí nhận hàng
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.titlelist}>
                            Hàng đã đăng kí nhận
                        </Text>
                        <FlatList
                            data={DataListBox}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItemGoodss}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </ImageBackground>
    );
};
export default ViewGoodss;
