// playersData.js
import avatarImg01 from "../../assets/images/avatar-img.png"
import avatarImg02 from "../../assets/images/avatar-img-2.png"
import avatarImg03 from "../../assets/images/avatar-img-3.png"

const membersData = [
  { 
    name: "Ralph Edwards",
    username:"redwards",
    points: 120,
    arrow: "green",
    image: avatarImg01 // Adjust the path according to your folder structure
  },
  { 
    name: "Guy Hawkins",
    username:"ghawks",
    points: 110,
    arrow: "green",
    image: avatarImg02  // Adjust the path according to your folder structure
  },
  { 
    name: "Bessie Cooper",
    username: "bcoop23",
    points: 90,
    arrow: "red",
    image: avatarImg03  // Adjust the path according to your folder structure
  },
  
  // Add more player objects here as needed
];

export default membersData;
