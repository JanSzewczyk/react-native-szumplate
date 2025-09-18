import { Text, View } from "react-native";

import { env } from "~/data/env";

export default function Index() {
  console.log("Index", env);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
