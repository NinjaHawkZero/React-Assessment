### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a javascript libarary used for building front-end interfaces, you would use it to build a UI where you would want to save time 
and write more efficient code by using resuable components.

- What is Babel?
Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser. 


- What is JSX?
JSX allows you to write HTML in React by converting HTML into React components, helping you to more easily create user interfaces for your web applications.


- How is a Component created in React?
You create a function that returns the jsx component.


- What are some difference between state and props?
State can change, props are immutable once passed into a component.

- What does "downward data flow" refer to in React?
Downward data flow is the idea that parent components pass data down to their children via props. 


- What is a controlled component?
A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.


- What is an uncontrolled component?
A Uncontrolled Component is one that stores its own state internally.

- What is the purpose of the `key` prop when rendering a list of components?
 React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Because indices and values can change and the key should be a stable element.


- Describe useEffect.  What use cases is it used for in React components?
UseEffect allows you to set a value, and gives you a function to update the state of the value in a component.  You can use useState to hold the state of the values in a form and update the form upon change or submission.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
The useRef is a hook that allows to directly create a reference to the DOM element in the component.  No the component is not re-rendered.

- When would you use a ref? When wouldn't you use one?
When you want to mutate a value without causing a re-render.  When you want to directly access and manipulate the DOM.  When you should be using props and useState to pass down data to a component and manipulate it's data instead.


- What is a custom hook in React? When would you want to write one?
A custom hook allows you to store a components logic into a reusable function.  You would use it to extract and reuse logic in other parts of your app.