import React, { useState } from "react";
import { View, TextInput, Text, Switch } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return <LoginScreen />;
}
