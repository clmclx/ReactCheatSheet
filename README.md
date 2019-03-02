# REACT Cheat Sheet

This is a cheat sheet for react from basic principle like props and state to more advanced used of frameworks like Redux, Typescript, or React-hooks. 
This file contains text explaining the concepts with some snippets and the Repo contains the code showcasing the soncepts. The explanations below assume some basic understanding of javascript.

**NB:** In no way you should assume that the examples below are the only way to do things, and it is even possible that some might not be best practice. If that is the case Please let me know!

##Run the code

## React Basics
### JSX 
React is built upon JSX. It is a syntax extension of JS allowing you to describe HTML like elements within the JS language, and allows react components to describe th UI.
### React Components
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
### Props and State
#### props
#### state
#### lift up pattern
### Lifecylce
## Higher Order Components
## Typescript
## REDUX
## HOOKS


