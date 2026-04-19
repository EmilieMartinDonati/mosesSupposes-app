import { Colors } from "@/constants/theme"
import CodeAddBanner from "@/features/codes/CodeAddBanner"
import HomeHeader from "@/features/home/homeHeader"
import WritingWorkshopList from "@/features/writingWorkshops/writingWorkshopsList"
import { ScrollView, StyleSheet, View } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={styles.main}
                style={{ backgroundColor: Colors.light.background }}>
                <HomeHeader title="MOSES SUPPOSES" logo="" actions={[]} />
                <View style={styles.codeAddBannerContainer}>
                    <CodeAddBanner />
                </View>
                <View style={styles.writingWorkshopListContainer}>
                    <WritingWorkshopList />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        // paddingTop: 55.5,
        justifyContent: "flex-start"
    },
    codeAddBannerContainer: {
    },
    writingWorkshopListContainer: {
        paddingTop: 24
    }
})
