import coolxMain from "../../../assets/projects/coolx-main.png";
import digiartMain from "../../../assets/projects/digiart-main.png";
import netfilmMovies from "../../../assets/projects/netfilm-movies.png";
import calc from "../../../assets/projects/calc.png";
import videoplayer from "../../../assets/projects/videoplayer.png";
import portfolio from "../../../assets/projects/portfolio.png";

const webProjects = [
  {
    title: "MVP for Coolx",
    description: "Minimum viable product development",
    imgUrl: coolxMain,
    info: "The app will help with the management of forestry projects using AI and machine learning to offer information faster and more accurately about the lands and the forest inventory.",
    repo: "https://github.com/Frankovg/proyecto_final_socratech",
    video:
      "https://www.youtube.com/watch?v=BGOv_VQLyyU&t=8s&ab_channel=Socratech",
    test: "",
    pictures: ["coolx-projects.png", "coolx-admin.png", "coolx-user.png"],
    client: "Coolx",
    company: "Socratech",
    stack: "React.js, JavaScript, Node.js, Express, MySQL, Bootstrap, Sass",
  },
  {
    title: "DigiArt",
    description: "A social network for digital artists",
    imgUrl: digiartMain,
    info: "This is my personal full stack project that I made after 8 weeks in the bootcamp. It was made just by myself and it tooks 3 days to finish it. The project is a kind of exam in where the students can probe the knowledge level in the middle of the bootcamp.",
    repo: "https://github.com/Frankovg/proyecto_socratech",
    video: "https://www.youtube.com/watch?v=x851u6-utEU&ab_channel=Socratech",
    test: "",
    pictures: ["digiart-ux.png", "digiart-user0.png", "digiart-user1.png"],
    client: "",
    company: "Socratech",
    stack: "HTML5, CSS3, Bootstrap, Sass, JavaScript, Node.js, Express, MySQL",
  },
  {
    title: "Netfilm",
    description: "A Netflix clone made with React",
    imgUrl: netfilmMovies,
    info: "Netfilm is a full responsive Netflix clone developed with React.js and Redux. In this case I did not create the back-end because I have used Firebase to make the user authorization. The API for the movies is the famous The Movie Data Base (TMDB).",
    repo: "https://github.com/Frankovg/netfilm",
    video:
      "https://www.youtube.com/watch?v=g6nDENxjK3c&ab_channel=FrancoAmoroso",
    test: "",
    pictures: ["netfilm-login.png", "netfilm-user.png", "netfilm-home.png"],
    client: "",
    company: "",
    stack: "React.js, Redux, JavaScript, Bootstrap, Sass, Firebase",
  },
  {
    title: "Calculator",
    description: "Built with JavaScript",
    imgUrl: calc,
    info: "A calculator made from zero with Javascript. It only does simple mathematical equations as adds, subtracts, multiplies and divides. Functions are resolved with Vanilla Javascript and it does not contain eval() function.",
    repo: "https://github.com/Frankovg/Calculator_JS",
    video: "",
    test: "https://frankovg.github.io/Calculator_JS/",
    pictures: ["calculator.png"],
    client: "",
    company: "",
    stack: "JavaScript, HTML5, CSS3, Sass",
  },
  {
    title: "Video Player",
    description: "Made from scratch with JavaScript",
    imgUrl: videoplayer,
    info: "The Video Player is an excercise for learning Vanilla Javascript. All the functionalities are made with JS. It detects the duration of the video automatically. You can go forward or backward 5 seconds. Play and pause. The timebar can be changed by clicking on it.",
    repo: "https://github.com/Frankovg/video-player",
    video: "",
    test: "https://frankovg.github.io/video-player/",
    pictures: ["videoplayer.png"],
    client: "",
    company: "",
    stack: "JavaScript, HTML5, CSS3",
  },
  {
    title: "My personal web portfolio",
    description: "A React web app made with love for you",
    imgUrl: portfolio,
    info: "I started to build this web as soon as I finished the bootcamp of Full-Stack Web Development. The purpose  is to show myself sharing  my bio and some of my works. I hope you like it!",
    repo: "",
    video: "",
    test: "",
    pictures: ["franco-home.png"],
    client: "",
    company: "",
    stack: "React.js, JavaScript, Bootstrap, Sass",
  },
];

export default webProjects;
