import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import SignUpForm from "./SignUpForm.vue";

describe("SignUpForm 테스트", () => {
  render(SignUpForm);

  it("SignUpForm 렌더링 시 내부에 UserName, Email, Password INPUT 3개가 표시되어야함1", () => {
    expect(screen.getByPlaceholderText("username")).toBeTruthy();
  });

  it("SignUpForm 렌더링 시 내부에 UserName, Email, Password INPUT 3개가 표시되어야함2", () => {
    expect(screen.getByPlaceholderText("email")).toBeTruthy();
  });

  it("SignUpForm 렌더링 시 내부에 UserName, Email, Password INPUT 3개가 표시되어야함3", () => {
    expect(screen.getByPlaceholderText("password")).toBeTruthy();
  });
});
