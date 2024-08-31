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
