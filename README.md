## 🟡 Simple coin flipper

### [💽 Demo](https://github.com/salikovskiy/coin-flip)

## My notes:

- ### Refs

Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component. And you can forget about `e.target.parentNode.childNodes[0].childNodes[0]`

[Docs](https://reactjs.org/docs/refs-and-the-dom.html)

```JavaScript
  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

    - You cannot reference refs from the render() method.
    - Also refs will not work on stateless components
