import { useState } from "react";
import { styled } from "styled-components/native";
import PropTypes from "prop-types";

import { Card, Text, Toggle } from "@ui-kitten/components";

import TodoHeader from "./TodoHeader";

export default function Todo({ todoId }) {
  const [done, setDone] = useState(false);

  const dueDate = "";
  const descText = "";

  return (
    <JoliCard accent={TodoHeader}>
      <JoliFlex>
        <JoliCenteredText done={done}>{descText}</JoliCenteredText>
        <Toggle status="success" onChange={setDone} checked={done} />
      </JoliFlex>
      <JoliDescriptionText>{dueDate}</JoliDescriptionText>
    </JoliCard>
  );
}

Todo.propTypes = {
  todoId: PropTypes.string.isRequired,
};

const JoliCard = styled(Card)`
  width: 100%;
`;

const JoliFlex = styled.View`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const JoliCenteredText = styled(Text)`
  margin-top: auto;
  margin-bottom: auto;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  flex-shrink: 1;
`;

const JoliDescriptionText = styled.Text`
  font-size: 12px;
  text-align: right;
`;
