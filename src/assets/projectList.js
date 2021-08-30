import results from "./imgs/results_page_screenshot.png"
// image, discription, title, github, deployed

const projectList = [
    {
    id: 1,
    title: "Cocktails Cuisine & Craft Beers",
    // image: "/results_page_screenshot.png",
    image: results,
    github: "https://github.com/JacobBeckfeld/Cocktails-Cuisine-Craft-Beers.git",
    deployed: "https://jacobbeckfeld.github.io/Cocktails-Cuisine-Craft-Beers/",
    discription: "This app allowes you to search for restaraunts in an area. It also allows you to search for cocktail recipies",
    },
    {
    id: 2, 
    title: "Password Generator",
    image: "/Password-gen-screenshot.png",
    github: "https://github.com/JacobBeckfeld/Password-Generator.git",
    deployed: "https://jacobbeckfeld.github.io/Password-Generator/",
    discription: "This app creats a randomly generated password",
    },
    {
    id: 3,
    title: "DND Character Creator",
    image: "/dnd-profile-page.png",
    github: "https://github.com/JacobBeckfeld/Group-Project_Two.git",
    deployed: "https://dnd-creator.herokuapp.com/",
    discription: "This app lets you create an account that can be used to make and manage D&D characters",
    },
    {
    id: 4,
    title: "Day Planner",
    image: "/day-planner.png",
    github: "https://github.com/JacobBeckfeld/Day-Planner.git",
    deployed: "https://jacobbeckfeld.github.io/Day-Planner/",
    discription: "This app is a day planner that changes color depending on the hour."
    },
    {
    id:5,
    title: "Diablo Profile Search",
    image: "/dashboard.PNG",
    github: "https://github.com/JacobBeckfeld/Project-3.git",
    deployed: "https://desolate-chamber-11891.herokuapp.com/",
    discription: "This we app is used to create a profile that can search for diablo profiles and show their characters and stats. App also shows leaderboards and specifics about each character."
    }
]

export default projectList;