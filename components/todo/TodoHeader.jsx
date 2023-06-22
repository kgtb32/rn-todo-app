import { View } from "react-native";
import { styled } from "styled-components/native";
import PropTypes from "prop-types";

import Line from "../ui/Line";

const defaultColor = "red";

export default function TodoHeader({ color }) {
  return (
    <View>
      <JoliCardHeader color={color} />
      <Line />
    </View>
  );
}

TodoHeader.propTypes = {
  color: PropTypes.string,
};

TodoHeader.defaultProps = {
  color: defaultColor,
};

const JoliCardHeader = styled.View`
  background: ${(props) => props.color ?? defaultColor};
  height: 6px;
`;
