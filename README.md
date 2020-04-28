## 🟡 Simple coin flipper

### [💽 Demo](https://github.com/salikovskiy/coin-flip)

<video width="320" height="240" autoplay>
  <source src="https://thumbs.gfycat.com/DetailedGrimyGermanwirehairedpointer-mobile.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

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

- ### Void element.offsetWidth

Answer from stackoverflow:
[Original](https://www.reddit.com/r/learnjavascript/comments/782qdx/what_does_void_elementoffsetwidth_do/)

When you make changes to the dom, such as classList.remove('run-animation'), this can result in a cascade of changes to the page. Rendering those changes can be expensive, and since it's pretty common that you'll change multiple things in a row, browsers try to batch up accumulated changes and only perform the calculation at the end of what you're doing.

So if that weird line wasn't there, then here's what would happen:

You remove the class. The browser notes this, but doesn't redraw the screen yet

You add the class. The browser notes this, but doesn't redraw the screen yet

Your function finishes, and the browser decides to do the necessary calculations to make the page match what you've asked for.... But nothing has changed! you've put the page back into the same state it had before the click handler began. Since nothing has changed, the display stays the same; no animation runs.

What that extra line of code is doing is asking the browser to give you information about the dom. But in order to know what the offsetWidth is, the browser has to abandon its plan of batching the changes and perform the reflow of the page right now. The current state has no run-animation class, which is a change, and so the animation gets reset. And later when the function finishes, it performs the calculations again and sees that you've made yet another change, relative to when it provided you with the offsetWidth, so it applies that too.

In short: You're forcing the browser to do extra work, and it just so happens that in this case that is desirable. In most cases, forcing the browser to do extra work is a bad thing. Most of the time you want to avoid querying the dom in this way, since it can reduce performance.
