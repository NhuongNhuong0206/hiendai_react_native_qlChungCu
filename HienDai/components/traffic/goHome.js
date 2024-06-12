import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Alert,
    Linking,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, Polyline } from "react-native-maps";
import axios from "axios";

const GoHome = () => {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [location, setLocation] = useState(null);
    const [routeCoordinates, setRouteCoordinates] = useState([]);

    const destination = {
        latitude: 10.8231,
        longitude: 106.6297,
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                Alert.alert("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });

            const origin = `${location.coords.latitude},${location.coords.longitude}`;
            const dest = `${destination.latitude},${destination.longitude}`;
            const apiKey =
                "2d97efd6805f534797a72d001fcd7ef709a82cc4c5c0b92832847fca1bc5b252";
            const response = await axios.get(
                `https://rsapi.goong.io/Direction?origin=${origin}&destination=${dest}&vehicle=car&api_key=${apiKey}`
            );

            if (response.data.routes.length) {
                const points = decodePolyline(
                    response.data.routes[0].overview_polyline.points
                );
                setRouteCoordinates(points);
            }
        })();
    }, []);

    const decodePolyline = (t) => {
        let points = [];
        for (let step of t.split("")) {
            let point = [];
            let index = 0;
            let length = t.length;
            let lat = 0;
            let lng = 0;

            while (index < length) {
                let b,
                    shift = 0,
                    result = 0;
                do {
                    b = t.charCodeAt(index++) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                } while (b >= 0x20);

                let dlat = result & 1 ? ~(result >> 1) : result >> 1;
                lat += dlat;

                shift = 0;
                result = 0;
                do {
                    b = t.charCodeAt(index++) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                } while (b >= 0x20);

                let dlng = result & 1 ? ~(result >> 1) : result >> 1;
                lng += dlng;

                point = [lat / 1e5, lng / 1e5];
                points.push({ latitude: point[0], longitude: point[1] });
            }
        }
        return points;
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={setRegion}
            >
                {location && (
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Vị trí hiện tại"
                        pinColor="blue"
                    />
                )}
                <Marker coordinate={destination} title="Điểm đến" />
                <Polyline
                    coordinates={routeCoordinates}
                    strokeColor="#000"
                    strokeWidth={3}
                />
            </MapView>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination.latitude},${destination.longitude}&travelmode=driving`;
                    Linking.openURL(url);
                }}
            >
                <Text style={styles.buttonText}>Đi</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: "white",
    },
});

export default GoHome;
