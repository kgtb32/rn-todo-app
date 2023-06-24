import { View, Text } from "react-native";
import { TopNavigationAction } from "@ui-kitten/components";
import MaterialCommunityIcon from "../components/icons/MaterialCommunityIcon";
import Header from "../components/ui/Header";

export default function Home() {
  const DActions = (
    <TopNavigationAction
      icon={
        <MaterialCommunityIcon
          name="plus-circle-outline"
          size={25}
          color="black"
        />
      }
    />
  );

  return (
    <View>
      <Header title="Mes Tâches" accessoryRight={DActions} />
      <Text>Home page</Text>
    </View>
  );
}
