import { Avatar, Text, TextInput } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import myStyles from "../../Styles/myStyles";
import styles from "./style";
import * as React from "react";
import { useState } from "react";

const homeScreen = ({ name = "Nguyễn Thi A" }) => {
    const [isPressed, setIsPressed] = useState(false);
    const [opacity, setOpacity] = useState({}); // State để lưu trữ trạng thái của mỗi view
    // Hàm xử lý sự kiện onPress cho mỗi view
    return (
        <View style={[styles.container]}>
            <View style={[styles.header]}>
                <View style={[styles.headerIconLeft]}>
                    <TextInput.Icon icon="menu" color={"#ab9570"} size={30} />
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
                <Text style={[styles.helloText]}>Xin chào, {name}</Text>
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
            <View style={[styles.utilities]}>
                <View style={[styles.utilitiesTow]}>
                    <TouchableOpacity
                        style={[
                            styles.utilitiesChild,
                            isPressed && styles.btnPressedOpacity,
                        ]}
                    >
                        <TextInput.Icon
                            icon="home-assistant"
                            size={34}
                            color={"#dcd3d1"}
                            style={[styles.utilitiesIcon]}
                        />
                        <Text style={[styles.utilitiesText]}>Tiện ích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.utilitiesChild,
                            isPressed && styles.btnPressedOpacity,
                        ]}
                    >
                        <TextInput.Icon
                            icon="cog"
                            size={34}
                            color={"#dcd3d1"}
                            style={[styles.utilitiesIcon]}
                        />
                        <Text style={[styles.utilitiesText]}>Dịch vụ</Text>
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
                        <Text style={[styles.utilitiesText]}>Hoá đơn</Text>
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
                        <Text style={[styles.utilitiesText]}>Phản ánh</Text>
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
                        <Text style={[styles.utilitiesText]}>Giao thông</Text>
                    </TouchableOpacity>
                    {/* <View style={[styles.utilitiesChild]}>
                        <TextInput.Icon
                            icon="home-assistant"
                            size={34}
                            color={"#dcd3d1"}
                            style={[styles.utilitiesIcon]}
                        />
                        <Text style={[styles.utilitiesText]}>Tiện ích</Text>
                    </View> */}
                </View>
            </View>
            <View style={[styles.bottom]}>
                <View style={[styles.bottomIcon]}>
                    <TextInput.Icon
                        icon="home"
                        size={24}
                        color={"#dcd3d1"}
                        style={[styles.bottomIconChild]}
                    />
                </View>
                <View style={[styles.bottomIcon]}>
                    <TextInput.Icon
                        icon="phone"
                        size={24}
                        color={"#dcd3d1"}
                        style={[styles.bottomIconChild]}
                    />
                </View>
                <View style={[styles.bottomIcon]}>
                    <TextInput.Icon
                        icon="account"
                        size={24}
                        color={"#dcd3d1"}
                        style={[styles.bottomIconChild]}
                    />
                </View>
            </View>
        </View>
    );
};

export default homeScreen;
