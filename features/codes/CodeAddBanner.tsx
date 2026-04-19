import { Colors } from "@/constants/theme"
import { Pressable, StyleSheet, Text, View } from "react-native"

export default function CodeAddBanner() {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.codeAddBanner,
                pressed && styles.codeAddBannerPressed
            ]}>
            <View>
                <Text style={styles.codeAddText}>ENTRER UN CODE D'INVITATION</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    codeAddBanner: {
        backgroundColor: Colors.light.waterGreen,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    codeAddBannerPressed: {
        opacity: 0.8
    },
    codeAddText: {
        color: Colors.light.chocolate,
        fontSize: 16,
        fontWeight: "600"
    }
})