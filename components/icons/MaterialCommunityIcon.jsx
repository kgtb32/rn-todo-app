import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function MaterialCommunityIcon(props) {
  const baseProps = { ...props, style: props.customStyle ?? {} };

  return <Icon {...baseProps} />;
}
