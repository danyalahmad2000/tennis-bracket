// playersData.js
import avatarImg01 from "../../../assets/images/avatar-img.png"
import avatarImg02 from "../../../assets/images/avatar-img-2.png"
import avatarImg03 from "../../../assets/images/avatar-img-3.png"

const playersData = [
  { 
    name: "Rafael Nadal",
    rank: 1,
    category: "in all Men's Ranking",
    points: 120,
    arrow: "green",
    image: avatarImg01 // Adjust the path according to your folder structure
  },
  { 
    name: "Roger Federer",
    rank: 3,
    category: "in all Men's Ranking",
    points: 110,
    arrow: "green",
    image: avatarImg02  // Adjust the path according to your folder structure
  },
  { 
    name: "Novak Djokovic",
    rank: 2,
    category: "in all Men's Ranking",
    points: 90,
    arrow: "red",
    image: avatarImg03  // Adjust the path according to your folder structure
  },
  // Add more player objects here as needed
];

export default playersData;
