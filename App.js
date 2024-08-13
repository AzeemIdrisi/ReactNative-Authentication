import { StatusBar } from "expo-status-bar";
import Navigation from "./navigators/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}
