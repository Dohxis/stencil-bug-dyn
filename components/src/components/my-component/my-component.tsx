import { Component } from "@stencil/core";

@Component({
  tag: "my-component"
})
export class MyComponent {
  render() {
    const Tag = "my-component-dyn" as any;

    return <Tag />;
  }
}
