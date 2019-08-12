import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledNotification = styled.div`
  padding: 16px;
  margin: 10px 0;
  border-radius: 5px;
  align-items: center;
  transition: opacity 3s;
  text-transform: capitalize;
  border: 1px solid lightgray;
  width: var(--container-width);

  @keyframes fade-away {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  &.show {
    display: flex;
    opacity: 1;
  }

  &.fade-away {
    animation-duration: 3s;
    animation-name: fade-away;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }

  &.hidden {
    visibility: hidden;
  }

  &.correct-msg {
    background-color: #cce5ff;
  }

  &.incorrect-msg {
    background-color: #f8d7da;
  }

  &.correct-msg:before {
    content: "correct";
  }

  &.incorrect-msg:before {
    content: "incorrect";
  }
`;

const Notification = ({ showClassName, isSet }) => {
  const [correctClassName, setCorrectClassName] = useState("incorrect-msg");

  const correctClassNameEffect = () => {
    setCorrectClassName(isSet ? "correct-msg" : "incorrect-msg");
  };

  useEffect(correctClassNameEffect, [isSet]);

  const classNames = `${showClassName} ${correctClassName}`;
  return (
    <StyledNotification className={classNames}>{" set"}</StyledNotification>
  );
};

Notification.defaultProps = {
  cardSetSize: 0,
  isSet: false
};

Notification.propTypes = {
  cardSet: PropTypes.number,
  isSet: PropTypes.bool
};

export default Notification;
