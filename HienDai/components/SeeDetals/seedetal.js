import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native';
import { Card, Title, Paragraph, Appbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MyUserContext } from '../../configs/Contexts';
import { format } from 'date-fns';
import styles from "./style";

const SeeDetail = () => {
    const user = React.useContext(MyUserContext);
    const navigation = useNavigation();
    const route = useRoute(); // Sử dụng hook useRoute để lấy thông tin route
    const { bill } = route.params || {}; // Lấy thông tin bill từ route.params

    const handleGoBack = () => {
        navigation.goBack();

    };
    console.log(bill)

    return (
        <ImageBackground style={styles.container} source={require('../../assets/backgrondLogin.png')}>
            <Appbar.Header style={styles.headers}>
                <Appbar.BackAction onPress={handleGoBack} color="#e8eae1" fontWeight='bold' />
                <Appbar.Content title="HÓA ĐƠN CHI TIẾT" titleStyle={{ color: "#e8eae1", fontWeight: 'bold' }} />
            </Appbar.Header>
            <ScrollView 
                contentContainerStyle={styles.scrollViewContent} 
                style={{ flex: 1 }}
            >
                <Card key={bill.id} style={styles.card}>
                    <Card.Content>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Mã hóa đơn:</Text>
                            <Text style={styles.value}>{bill.id}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Tên hóa đơn:</Text>
                            <Text style={styles.value}>{bill.name_bill}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Tổng tiền:</Text>
                            <Text style={styles.value}>{bill.money} VND</Text>
                        </View>
                        {bill.status_bill && (
                            <View style={styles.infoContainer}>
                                <Text style={styles.title}>Trạng thái:</Text>
                                <Text style={styles.value}>{bill.status_bill}</Text>
                            </View>
                        )}
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Ngày tạo:</Text>
                            <Paragraph style={styles.value}>
                                {format(new Date(bill.created_date), 'dd/MM/yyyy')}
                            </Paragraph>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Ngày thanh toán:</Text>
                            <Paragraph style={styles.value}>
                                {format(new Date(bill.updated_date), 'dd/MM/yyyy')}
                            </Paragraph>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Ghi chú:</Text>
                            <Text style={styles.value}>{bill.decription}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>Mã thanh toán</Text>
                            <Text style={styles.value}>{bill.trading_code}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                        <Text style={styles.title}>Hình ảnh giao dịch:</Text>
                        
                        {bill.transaction_images && Array.isArray(bill.transaction_images) && bill.transaction_images.length > 0 ? (
                            bill.transaction_images.map((image, index) => (
                                <Image
                                    key={index}
                                    style={styles.transactionImage}
                                    source={{ uri: bill.transaction_images }}
                                    
                                />
                            ))
                        ) : (
                            <Text style={styles.value}>Không có ảnh</Text>
                        )}
</View>
                    </Card.Content>
                </Card>
            </ScrollView>
        </ImageBackground>
    );
};

export default SeeDetail;
