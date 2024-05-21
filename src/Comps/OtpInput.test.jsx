import React from "react";
import { fireEvent, render } from "@testing-library/react";
import OtpInput from "./OtpInput";

describe("OtpInput", () => {
  test("should focus on the next input when ArrowRight key is pressed", () => {
    const { getByTestId } = render(<OtpInput />);
    const input = getByTestId("otp-input");

    fireEvent.keyDown(input, { key: "ArrowRight" });
    focus;
    // Assert that the is on the next input
    expect(document.activeElement).toBe(input.nextSibling);
  });

  test("should focus on the previous input when ArrowLeft key is pressed", () => {
    const { getByTestId } = render(<OtpInput />);
    const input = getByTestId("otp-input");

    fireEvent.keyDown(input, { key: "ArrowLeft" });

    // Assert that the focus is on the previous input
    expect(document.activeElement).toBe(input.previousSibling);
  });

  test("should keep the selection range position when typing the same digit", () => {
    const { getByTestId } = render(<OtpInput />);
    const input = getByTestId("otp-input");

    fireEvent.change(input, { target: { value: "1" } });
    fireEvent.keyDown(input, { key: "1" });

    // Assert that the selection range is maintained
    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe(1);
  });

  test("should focus on the previous input when Backspace key is pressed and the input value is empty", () => {
    const { getByTestId } = render(<OtpInput />);
    const input = getByTestId("otp-input");

    fireEvent.keyDown(input, { key: "Backspace" });

    // Assert that the focus is on the previous input
    expect(document.activeElement).toBe(input.previousSibling);
  });
});
