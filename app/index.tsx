import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </SafeAreaView>
    </View>
  );
}
