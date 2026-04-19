import Header from "@/components/header"
import { Colors } from "@/constants/theme"
import CodeAddBanner from "@/features/codes/CodeAddBanner"
import WritingWorkshopList from "@/features/writingWorkshops/writingWorkshopsList"
import { ScrollView, StyleSheet, View } from "react-native"

export default function HomeScreen() {
    return (
        <ScrollView
            contentContainerStyle={styles.main}
            style={{ backgroundColor: Colors.light.background }}>
            <Header title="MOSES SUPPOSES" logo="" actions={[]} />
            <View style={styles.codeAddBannerContainer}>
                <CodeAddBanner />
            </View>
            <View style={styles.writingWorkshopListContainer}>
                <WritingWorkshopList />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 55.5,
        justifyContent: "flex-start"
    },
    codeAddBannerContainer: {
    },
    writingWorkshopListContainer: {
        paddingTop: 24
    }
})
