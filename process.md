# Process Description

## Initial Reading

### Main Points/Considerations/Concepts
- Versioning/Test Coverage (how will it be tested/how will it be used on initial states)
- How I'll describe the **process** for my solutions
- How I'll deliver changes to users who utilize my solutions
- Accessability for screen readers
- Documentation, Documentation, Documentation - alongside the design of the component (modularity)
 

### Structure
- Close Icon: Utilized when we want to shut down the component without storing any data
- Title: Left Aligned on top of the dialog, used to describe the purpose of the component
- Body: Left Aligned, stores text OR HTML content/controls
- Actions: Button/Control groups based on user needs. Will contain usage for Completing or cancelling dialogs requests
- Overlay: Blocks other pages content

### Sizing
 - If the browser is smaller than 600 px, then the dialog will be full screened, otherwise, it'll be the "default" modal size.
 - Using a full page, utilize the following table: 

### Interaction
- Users cannot interact with other page contents until the dialog is either closed or completed
- If the user clicks the X, a cancel option, or outside of the container, the dialog will be closed with 0 data saved.
- If the user completes the dialog, a success screen will be applied
- If a dialog includes scrolling content, the dialogs title will be maintained at the top

### Stories
- As a developer, I need to know how this component will work, the avialiability of said component, and how to utilize them in my application with little to no friction, so it can be delivered on time and on budget.
- As a non-developer, I need to be able to understand and use the component in the context of the product.

## Implementation

### Inital Ideas

- I've never used a modal before, however I've interracted with them a plethora of times. I'll most likely start with a quick google search, trying to get an idea of what I'm looking for, or if it exists.
- I'm also not familiar with what "framework" I should use, or if I should use vanilla react. I'll probably use createreactapp, although depricated, it'll allow me to stay as low level as I can.

### Implementation Ideas

- I'll start by creating my repository, initializing it, and describing all the details I went through, after I'll be looking for more details on how Modals are roughly made in other ways - specifically, with a component library to start thinking like the developers of those do.

- I'll also start by installing/setting up Vite/createreactapp. I asked my interviewer to triple check if that is ok.

- I then reread the email, and saw it'll be in Angular, even though the framework I'm using is React. I'll need to switch to that.

- It's been a few years since I've used angular, and I only wrote tests in it. My code may not work, but I hope to do good.

- I'll then move on to the design of the component.

### Angular Refresher Vs. React

- I have a background in React, so I'll be utilizing react-type ways of developing things (in angular)

- I'll then start by looking up simple ideas for building this. There is a "modal" component build with you, so I'll look at that, whilst also 

- I found a Sizing idea using w3schools, and I'm going to use that. (credits in notes)

- A good amount of angular is different for me, as a react developer + my previous experience was in testing. I made it work, however.

- I completed the rough "framework" utilizing the w3schools modal example. I'll then be working towards the "expandability" of the component

### Expandability
- After editing my component's CSS to allow full functionality (+ jog my memory on CSS + angular) I'll be able to add multiple options to actions and content to allow full modularity. Currently, you can pass in a general "angular component" to the parent component, rendering it in a specific way. 

- Most likely, I'll learm how to pass down HTML/other components OR I'll do it in a "bootstrap"/"react" way, inwhich I create a bunch of components that interract with each other. 

- I learned about ng-content tags, and that seems to be a solid way to go about the process of making it modular for the box setting. Now, I'll create a new component that'll be to initalize the "innards".

- I'll be needing to figure out injection, as I'm doing this currently in a very "react" way

## Conclusion

### Struggles
- I struggled figuring out some of the basic functionality, such as expandability, alongside the injection

- Suprisingly, styling was a plethora of a lot easier than I thought. I enjoyed utilizing SCSS and CSS variables

- I'm still learning, and I'm looking forward to learning more about Angular

### Next Steps

- I'll be practicing/researching Angular injections, as those clearly have a use here in making it more "open".

- I'd also like to do more research into how API's are used in Angular Frameworks, alongside how API documentation is done in a front-end context. 
