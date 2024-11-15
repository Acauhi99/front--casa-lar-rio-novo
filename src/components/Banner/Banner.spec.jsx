import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Banner } from "./Banner";

describe("Banner Component", () => {
  it("should render without crashing", () => {
    const { container } = render(<Banner />);
    expect(container).toBeDefined();
  });
});
