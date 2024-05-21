import styled from "styled-components";

export const StyledOTPInput = styled.input`
  width: 72px;
  height: 48px;
  font-size: 14px;
  font-weight: 900;
  line-height: 20px;
  color: #000;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #d8d8d8;
  padding: 12px;
`;

export const OtpInputWrapper = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const ProgressBar = styled.div`
  width: ${(props) => (props.$width ? props.$width + "%" : "auto")};
  background-color: green;
  height: 100%;
`;

export const ProgressBarText = styled.span`
  transform: translateX(50%) translateY(50%);
  color: ${(props) => (props.$width && props.$width > 50 ? "#fff" : "#000")};
  position: absolute;
`;
