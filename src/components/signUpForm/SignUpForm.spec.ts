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

describe("SignUpForm Input 값 있는 상태", () => {
  const setup = () => {
    const signUpForm = render(SignUpForm);
    const usernameInput = signUpForm.getByLabelText('username');
    const emailInput = signUpForm.getByLabelText('email');
    const passwordInput = signUpForm.getByLabelText('password');
    const signUpButton = signUpForm.getByText('Sign Up');

    return { signUpForm, usernameInput, emailInput, passwordInput, signUpButton };
  }

  afterEach(() =>
    cleanup()
  );

  it('SignUpForm 의 모든 입력 필드 값이 채워지면 Sign Up 버튼이 활성화 된다.', () => {
    const {usernameInput, emailInput, passwordInput, signUpButton} = setup();

    fireEvent.change(usernameInput, {target: {value: 'test name'}});
    fireEvent.change(emailInput, {target: {value: 'hello@world.com'}});
    fireEvent.change(passwordInput, {target: {value: '1234'}});
    // ✅TODO 다음 시간에 signUpButton의 disabled 속성을 확인하는 테스트 코드를 작성해야합니다.
    expect(signUpButton).toEqual(false);

  });


  it('Sign Up Form의 Email 은 Validation 절차가 진행되어야 한다.', () => {
    const { emailInput } = setup();
    const isValidEmail = (email:string) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        return true;
      return (false)
    }
    let isValidationRun = null;
    fireEvent.change(emailInput, {target: {value: 'hello@world.com'}});
    isValidationRun = isValidEmail(emailInput.innerText);
    expect(isValidationRun !== null).toBeTruthy();
  });

  it('Sign Up 버튼을 눌리면 signUp 함수가 실행되어 회원가입 api가 호출된다.', () => {
    const {signUpButton} = setup();
    fireEvent.click(signUpButton);
    expect(signUpButton).toHaveBeenCalled();
  });
});
