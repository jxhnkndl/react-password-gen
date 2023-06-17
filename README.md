# Password Generator
Responsive mobile first application for dynamically generating random passwords based on user defined criteria. Wireframed using **Adobe XD** and built with **React, Tailwind CSS, Daisy UI,** and **Framer Motion.**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white) 
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue) 
![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6)

## Quick Links

- [Deployed Application](#deployed-application)
- [Features](#features)
- [Reasons For Development](#reasons-for-development)
- [Takeaways](#takeaways)
- [Demo](#demo)
- [Contact](#contact)

## Deployed Application

[Visit the deployed application here!](https://jxhnkndl.github.io/react-password-gen/)

## Features
✅  User can define parameters for final generated password

✅  User can click/tap password display or lock icon to copy password to clipboard

✅  User can toggle between light and dark UI themes

✅  UI theme preference persists in local storage

✅  UI provides input validation feedback semantically through the styling of form components and reaction badges

✅  UI design is fully responsive and optimized for mobile devices

✅  Main UI components have subtle animations to create an enjoyable user experience

## Reasons For Development
I chose to build a small app based on a logic problem that I already had a strong understanding of how to solve so that I could focus on refreshing my React workflow, practice using Tailwind CSS as my primary styling tool, and learn how to apply simple animations to React components using Framer Motion. The primary goal with this app was to take a simple concept and create as complete and elegant a user experience as possible. I think that I succeeded in avoiding unnecessary alert boxes or modals by incorporating input validation directly into the form components through styling and disabling/enabling buttons. I also really enjoyed the challenge of figuring out how to implement basic component animations and a simple light/dark mode theme to enhance the overall user experience.

## Takeaways
* This was a great refresher on how to use the Context API to manage global state.

* To get the typing animation to run every time the password state changed, I had to learn how to use the `useRef()` to capture a reference to the `Typewriter` instances in the `PasswordField` component so that I could re-trigger the animation methods in a side effect triggered by the password state change. This was definitely a big challenge for a small feature but since `useRef()` was a hook I definitely didn't understand, I think it was worth it.

* I didn't know too much about how to animate components before building this app but I knew that I wanted to learn a few simple tricks that I'd seen on other websites. It took some experimenting to start getting the hang of Framer Motion but I was satisfied with the way that the entrance animations and the bouncing badge that appears when the password is clicked/tapped turned out. I think this will be easier to implement in my next project than it was in this one.

* Implementing Tailwind CSS and DaisyUI reduced amount of time it took me to design the user interface quite a bit. I think that even without the component library, I would still choose to use Tailwind as my CSS framework. I like that it's more flexible than other libraries like Bootstrap and a little bit faster to get up and running than raw CSS would be.

## Demo

<img src="assets/react-password-generator-demo.gif" alt="Application user interface and feature demo" width="100%">  
<br>

## Contact
J.K. Royston 👋🏼  
<jkroyston@gmail.com>  

[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139)](https://www.jkroyston.com) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/johnkendallroyston/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/jxhnkndl)