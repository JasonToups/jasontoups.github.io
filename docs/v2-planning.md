# Planning for Version 2

I would like to lean into my Javascript background for the phase 2 version of my Portfolio.

## Todos
- [ ] Research npm package [react-transition-group](https://www.npmjs.com/package/react-transition-group).
- [ ] Research particles.js [particles.js](https://vincentgarreau.com/particles.js/).
- [ ] Research how to animate the JS opening screen, with background & letters expanding.
  - possibly react transition group
- [ ] Research how to animate the memphis background vectors.
  - possibly particles.js
- [ ] Research how to animate the project cards flying in from the side.
  - possibly react transition group
- [ ] Research the transparent glass effect

## Goals
Remove all of the template styling and start from scratch

Build the new portfolio in React with many animated elements.

## Start Section
Possibly use the Ubuntu font and render my initials JT as an icon on a rounded yellow square background #F0DB4F, looking like the Javascript icon, centered on a white background.

Or I could look into replicating the font used in the icon.

https://worldvectorlogo.com/logo/logo-javascript

![Javascript logo](../img/icons/logo-javascript.svg)

As we scroll down, the yellow background fills the screen & expands outward.

A Javascript object extends out to the right of the initials, and has all of my information.

```javascript
background-color: #F0DB4F,
JT: {
  name: "jason toups",
  profession: "front end engineer",
  location: "oakland",
  specialties: ["javascript", "react", "styling", "vector graphics"],
  likes: ["new challenges", "pets", "cooking"],
}
```

## Second Section

As the screen scrolls down the yellow background scrolls upward to reveal an animated background of SVGs tumbling downward on a light grey background.

The images should be punctuation used in JS programming along with Memphis-style organic shapes rendered in pastel and jewel tones:

 `: ; , . [] {} ! = < >` 

 Example of Memphis inspiration:
 ![Memphis Graphic Design Inspiration](../img/inspiration/memphis-design-inspiration.png)

[Design History Movements - Memphis Design](https://99designs.com/blog/design-history-movements/memphis-design/#:~:text=Memphis%20Design%20is%20a%201980s,polka%20dots%20and%20squiggly%20lines.): 99Designs

 As we scroll down further, a transparent glass pane filling 70% of the screen width scrolls up, obscuring and blurring the background, as my career roles & descriptions appear with a screenshot of the sites, or the logo of the company appears to the left of the descriptions.

 ## Third Section

The third section focuses on my Apps.

The transparent glass overlay should scroll off the screen, as opaque cards appear from the left and right sides of the screen.

My 4 apps will appear as cards, with screenshots of the apps from the meta information included in the sites, and a small description of the app either beside or below the image, including the technologies used.

Clicking on the image will take us to the App in a new tab.

There will be a link to the Github at the bottom-right of the card description, in the form of the Github Octocat Mascot.

![Github Octocat Mascot Icon](../img/icons/github-octocat.png)

The memphis animated background can be seen between the cards.

## Final Section
The last section will be my contact information.

The memphis background should disappear, so we will be taken to a still background. 

I would like to have a google map of Oakland to show my hometown.

Here will be links to my LinkedIn, email, and possibly social links, twitter [@jsontoups](https://twitter.com/jsontoups).

