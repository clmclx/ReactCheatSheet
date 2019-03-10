# REACT Cheat Sheet

This is a cheat sheet for react from basic principle like props and state to more advanced used of frameworks like Redux, Typescript, or React-hooks. 
This file contains text explaining the concepts with some snippets and the Repo contains the code showcasing the soncepts. The explanations below assume some basic understanding of javascript.

**NB:** In no way you should assume that the examples below are the only way to do things, and it is even possible that some might not be best practice. If that is the case Please let me know!

## Run the code
The different concepts explained here have running examples within the folder of the project. For instance,
The code in the react-component folder contains the full example of the snippets described below.
you just need to run ```npm start```

## React Basics
### JSX 
React is built upon JSX. It is a syntax extension of JS allowing you to describe HTML like elements within the JS language, and allows react components to describe th UI.
### React Component
The notion of component constitutes the basis of the React framework. A component is the building block in charge of rendering a part of the UI.
Conceptually they are JS functions accepting inputs (the props) and returning a block desrcibing what should appear on the screem.
Components can be defined in 2 ways: as a class and as functions.
#### class components
One way to define components in React is to use the concept of class and inheritance. 
Every React component inherits from the Bas react component and has a render function returning some JSX. This way of representing component is commonly used, but it is not the only one
```javascript
class ClassComponent extends Component {
  render() {
    return (
      <div className="App">
        ....
      </div>
    );
  }
}
````
#### function components
react components can also be defined as functions returning JSX elements. 
```javascript
const StatelessComponent = () => {
    return (
    <div className="App">
       ...
    </div>
    );
};

export {StatelessComponent};
```
### Virtual Dom
#### HTML DOM
The html DOM (Document Object Model) is created by the browser when a page is loaded. It is constructed as a tree, and represents the different html elements of a page.
The DOM is accessible and modifiable by JS.

#### React Virtual DOM 
Because any change on the page will cause a re render of the whole DOM, changing one element becomes computationally expensive on large pages. 
The react virtual is a abstract copy of the HTML DOM, and allows  REACT to make changes on it without touching the real DOM.

The changes still happen on the real DOM but later on once react has done all the changes it needed on the virtual one. An algorithm called Diffing makes this process faster than making changes directly on the HTML DOM.

### Props and State
There are 2 types of data models in React. Props and state. Let's see what they represent and how they differ.
#### props
Props is short for properties. They are always passed on to a component by its parent (unidirectional data flow), and are immutbale (fancy word for not changing). 
#### state
Because a component's props should not changed once they are set, we need another data model to handle changes that can happen (changes triggered by something else than the parent component).
Now some components are static and should never change (as we have seen in the functional component above), they are stateless. However you will see that many times we need to change some data within the compnonent to change the way it is rendered. we need the state for those stateful components.
When we need to change the state of a component, we can use the method  ```javascript setState()```, which handle the heavy lifting for us. Let's see an example:

```javascript
export myComponent;
```
#### lift up pattern
### Lifecylce
## Higher Order Components
## Typescript
## REDUX
## HOOKS


