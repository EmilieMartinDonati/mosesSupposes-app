import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";

export default function WritingWorkshopCardSkeletonContent() {

    const opacity = useSharedValue(0.4);

    useEffect(() => {
        opacity.value = withRepeat(
            withTiming(1, {
                duration: 800,
                easing: Easing.inOut(Easing.ease),
            }),
            -1,
            true
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));


    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <View style={styles.title} />
            <View style={styles.lineFull} />
            <View style={styles.lineShort} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        height: 200,
        width: 280,
        borderWidth: 1,
        borderColor: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },

    title: {
        height: 16,
        width: "50%",
        backgroundColor: "#d1d5db", // gray-300
        borderRadius: 6,
    },

    lineFull: {
        height: 12,
        width: "100%",
        backgroundColor: "#e5e7eb", // gray-200
        borderRadius: 6,
    },

    lineShort: {
        height: 12,
        width: "83%",
        backgroundColor: "#e5e7eb",
        borderRadius: 6,
    },
});