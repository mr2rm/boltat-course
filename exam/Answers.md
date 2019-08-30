# Boltat - React Exam

## 1. When we prefer React over libraries like jquery?

When interacting with dynamic data which is updated regularly and want the page be updated efficiently based on it. In other words when the DOM is updated very often. Updating the DOM is a slow task, so React Virtual DOM can helps to update the DOM only when necessary.

React helps manage state of pages. So It used for making UI for Single Page Applications where the UI should respond actively to changes and makes them dynamic.

It's easy to use and It has more readable and reusable codes by use of component oriented structure.

## 2. How we share data between different components in React?

- Props (also using *Render Props* or *HOC*)
- Context
- State management library (e.g. *Redux*)

## 3. When we use the class component over a functional component?

For a while, classes provide access to more features (like state, lifecycle methods for side-effects and etc.) and functional components are called stateless. With *Hooks*, that’s not true anymore. They let you use state and other React features without writing a class.

The goal for Hooks is to cover all the use cases for classes as soon as possible. There are no hook equivalents to the `getSnapshotBeforeUpdate` and `componentDidCatch` lifecycles yet.

There are no plans to remove classes from React. So you can use any of them for each component. But functional components are more simple, concise, easy to use and more readable and also provides better performance.

## 4. What are the refs in react and why we should avoid them?

Refs provide a way to access created DOM nodes or React elements directly and manipulate the DOM *imperatively* outside of the typical dataflow. It's useful in situations when you want to update part of component without using props or re-rendering the entire component, which cause leaner code, better performance and more efficiency.

Some of good use cases for refs:

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.
- Managing canvas and media elements

React will assign ref when component mounts and back ref to `null` when it unmounts. So ref updates happens before `componentDidMount` or `componentDidUpdate` lifecycle methods.

Avoid using refs for anything that can be done *declaratively*. Also you may not use the it on functional components; because they don’t have instances; but you can use ref inside it. The ref manipulate the actual DOM (as opposed to virtual DOM) and you should be careful not to overuse it.
