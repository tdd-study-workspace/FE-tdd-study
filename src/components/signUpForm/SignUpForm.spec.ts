import { describe, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import SignUpForm from "./SignUpForm.vue";

describe("SignUpForm 테스트", () => {
  it("SignUpForm 렌더링 시 내부에 UserName, Email, Password INPUT 3개가 표시되어야함", () => {
    render(SignUpForm);
    screen.getByRole("input");
  });
});
