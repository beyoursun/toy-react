import { ToyReact, Component } from './toy-react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        cool
        <div>
          {this.children}
          {true}
        </div>
      </div>
    );
  }
}

const a = (
  <MyComponent>
    <div>123</div>
  </MyComponent>
);

ToyReact.render(a, document.body);
