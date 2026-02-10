import React from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

type ActionButtonProps = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  variant?: "primary" | "secondary";
  onPress?: () => void;
};

export function ActionButton({ title, icon, variant = "primary", onPress }: ActionButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const isPrimary = variant === "primary";

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        className={`flex-row items-center justify-center gap-x-3 rounded-2xl p-4 shadow-sm ${
          isPrimary ? "bg-blue-500 shadow-blue-500/25" : "border-2 border-gray-200 bg-white"
        }`}
      >
        <Ionicons name={icon} size={22} color={isPrimary ? "white" : "#374151"} />
        <Text className={`text-base font-semibold ${isPrimary ? "text-white" : "text-gray-700"}`}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}
