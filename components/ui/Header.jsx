import { styled } from "styled-components/native";
import { TopNavigation, Text } from "@ui-kitten/components";
import PropTypes from "prop-types";

export default function Header({ accessoryRight, title, accessoryLeft }) {
  const NavigationText = (
    <>
      <JoliNavigationText>{title}</JoliNavigationText>
    </>
  );

  return (
    <TopNavigation
      alignment="center"
      title={NavigationText}
      accessoryRight={accessoryRight}
      accessoryLeft={accessoryLeft}
    />
  );
}

Header.propTypes = {
  accessoryRight: PropTypes.node,
  accessoryLeft: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "(no-title)",
};

const JoliNavigationText = styled(Text)`
  font-weight: bold;
  font-size: 15px;
`;
