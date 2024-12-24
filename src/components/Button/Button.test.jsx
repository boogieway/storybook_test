import {render, screen} from "@testing-library/react";
import {Button} from "./Button";
import {Primary} from "./Button.stories";

test("should render Button", () => {
    const label = "Click me";
    render(<Button label={label}/>);
    const btnEl = screen.getByRole("button");
    expect(btnEl).toBeInTheDocument();
    expect(btnEl).toHaveTextContent('Click');
})

test("shoul render Ptimary Button", () => {
    render(<Primary {...Primary.args}/>);
    const btnEl = screen.getByRole("button");
    expect(btnEl).toHaveClass('storybook-button');
})