# Documentation of Modal

## Overview

My modal component allows modularity and accessibility for each and every component. It is resonably simple, as it's a wrapper component that stores the data/functionality for the modal, and then an additonal one that'll store the functionality for the modal actions.

## How I'll deliver changes to users who utilize my solutions
I'll have them be installable through an npm install, and importable resonably easily - just by including the format of the components (as listed here): 
``` 
<app-modal>
    //raw HTML goes here
    <app-modal-actions [modalActions]="modalActions"/>
</app-modal>
```

## Implementation

I utilized a plethora of resources online (found in the README document), however due to my limited experience in Angular, I had to start from scratch. I've utilized injections before, however only in a testing context.

I also taught myself more CSS than I've used in the past, and albiet tricky, was incredibly enjoyable and rewarding.

## Missing Implementations

Currently, the modal is not expandable, and it's not scrollable, alongside the actions are not injected in properly. I'll be expanding this in the future, as a personal project.

