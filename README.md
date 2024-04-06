# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot
#### Desktop main view
![Desktop main view](./screenshots/desktop-main.png)
#### Desktop rules view
![Desktop rules view](./screenshots/desktop-rules.png)
#### Desktop result view
![Desktop result view](./screenshots/desktop-result.png)
#### phone main view
![phone main view](./screenshots/phone-game.png)
#### phone rules view
![phone rules view](./screenshots/phone-rules.png)
#### phone result view
![phone result view](./screenshots/phone-result.png)
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Antd](https://ant.design/) -  React UI library
- [React](https://reactjs.org/) - JS library


### What I learned

I have learned to use react routers also o got more familiar with antd library .

```js
<BrowserRouter>
    <div className="App">
      <header className="App-header">
      <ScoreComponent score={score} />
      <Routes>
        <Route path="/" element={<GameComponent />} />
        <Route
              path="result/:option"
              element={<ResultComponent updateScore={updateScore} />}
            />
        <Route path="*" element={<h1>Null</h1>} />
      </Routes>
      <RulesModal />
      </header>
      </div>
    </BrowserRouter>
```

### Continued development

I will continue working the project to add all bonus functionalities which is :

- Scissors beats Paper
- Paper beats Rock
- Rock beats Lizard
- Lizard beats Spock
- Spock beats Scissors
- Scissors beats Lizard
- Paper beats Spock
- Rock beats Scissors
- Lizard beats Paper
- Spock beats Rock

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

