import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useWorkshopChannel from '@/hooks/realTime/useWorkshopChannel';
import { useAppStore } from '@/store/useAppStore';
import { useLocalSearchParams } from 'expo-router';

import WritingWorkshopComposer from '@/features/oneWritingWorkshop/writingWorkshopComposer';
import WritingWorkshopContent from '@/features/oneWritingWorkshop/writingWorkshopContent';
import WritingWorkshopHeader from '@/features/oneWritingWorkshop/writingWorkshopHeader';
import WritingWorkshopPrompt from '@/features/oneWritingWorkshop/writingWorkshopPrompt';

export default function WritingWorkshopEditor() {

  const writingWorkshopIdFromStore = useAppStore(state => state.writingWorkshopId)
  const { id } = useLocalSearchParams()
  const writingWorkshopId = writingWorkshopIdFromStore || id


  const writingWorkshop = useAppStore(state => state.writingWorkshop)
  const guestId = useAppStore(state => state.guestId)
  const userId = useAppStore(state => state.userId)

  console.log("WORKSHOP", writingWorkshop)

  // call useEffect hook to register user presence in workshop with supabase realTime and to untrack user when component unmounts
  useWorkshopChannel({ writingWorkshopId, guestId, userId })

  return (
    <SafeAreaView style={styles.writingWorkshopEditorContainer}>
      <WritingWorkshopHeader
        title={writingWorkshop.title}
        type={"Cadavre Exquis"}
        presencesCount={10}
        participantsCount={3}
      />
      <WritingWorkshopPrompt
        prompt={writingWorkshop.prompt} />
      <WritingWorkshopContent
        contributions={[]} />
      <WritingWorkshopComposer />
    </SafeAreaView>)

}

const styles = StyleSheet.create({
  writingWorkshopEditorContainer: {
    flex: 1,// why do I need to put it I don't see why view is not full screen by default ?
    justifyContent: 'space-between',
    backgroundColor: "white"
  }
});