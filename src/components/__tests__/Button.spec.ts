import { describe, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import Button from "../Button.vue";

describe("Button 테스트", () => {
  it("title 프롭 전달 시 버튼 내부에 표시되어야함", () => {
    render(Button, {
      props: {
        title: "Home",
      },
    }).debug();
    screen.getByText("Home");
  });
});
