import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/vue";
import SignUpForm from "./SignUpForm.vue";
import { fireEvent } from "@testing-library/dom";

describe("SignUpForm Input 값 없는 상태", () => {

  // it('matches snapshot', () => {
  //   expect(signUpForm.container).toMatchSnapshot();
  // });
  beforeEach(() => {
    render(SignUpForm);
  });

  afterEach(() =>
    cleanup()
  );

  it("SignUpForm 렌더링 시 내부에 UserName INPUT이 표시되어야함", () => {
    expect(screen.getByLabelText("username").tagName).toEqual("INPUT");
    expect(screen.getByLabelText("username").getAttribute('type')).toEqual('text');
  });

  it("SignUpForm 렌더링 시 내부에 Email INPUT이 표시되어야함", () => {
    expect(screen.getByLabelText("email")).toBeTruthy();
    expect(screen.getByLabelText("email").getAttribute('type')).toEqual('email');
  });

  it("SignUpForm 렌더링 시 내부에 Pass INPUT이 표시되어야함", () => {
    expect(screen.getByLabelText("password")).toBeTruthy();
    expect(screen.getByLabelText("password").getAttribute('type')).toEqual('password');
  });

  it('SignUpForm 의 모든 입력 필드 값이 채워지지 않으면 Sign Up 버튼이 비활성화 된다.', () => {
    expect(screen.getByText('Sign Up').hasAttribute('disabled')).toBeTruthy();
  });

  it('SignUpForm 렌더링 시 Sign Up Button이 포함되어있다.', () => {
    expect(screen.getByText("Sign Up").tagName).toEqual('BUTTON');
  });

  it('Sign Up Form의 Email 은 Validation이 수행되지 않아야 한다.', () => {
    const emailInput = screen.getByLabelText('email');
    expect(emailInput.innerHTML.length === 0).toBeTruthy();
  });
});
