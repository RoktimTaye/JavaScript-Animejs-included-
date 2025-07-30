// h1 element ko select kar rahe hain
let h1 = document.querySelector("h1");

// 20 random names dynamically generate karne ka function
function getRandomName() {
  // First names ka array
  const firstNames = [
    "Roktim",
    "John",
    "Priya",
    "Amit",
    "Sara",
    "Rahul",
    "Neha",
    "David",
    "Anjali",
    "Vikram",
    "Simran",
    "Arjun",
    "Meera",
    "Riya",
    "Kabir",
    "Sonia",
    "Rohan",
    "Nina",
    "Sam",
    "Tina",
  ];
  // Last names ka array
  const lastNames = [
    "Taye",
    "Smith",
    "Patel",
    "Sharma",
    "Kumar",
    "Singh",
    "Gupta",
    "Verma",
    "Das",
    "Roy",
    "Mehta",
    "Joshi",
    "Jain",
    "Chopra",
    "Kapoor",
    "Bose",
    "Sen",
    "Reddy",
    "Nair",
    "Dutta",
  ];
  // Random index se first name select karte hain
  let fname = firstNames[Math.floor(Math.random() * firstNames.length)];
  // Random index se last name select karte hain
  let lname = lastNames[Math.floor(Math.random() * lastNames.length)];
  // Full name return karte hain
  return fname + " " + lname;
}

// 20 random full names ka array bana rahe hain
let names = Array.from({ length: 20 }, getRandomName);
// Index track karta hai abhi kaunsa naam dikhana hai
let index = 0;

// Jab bhi koi key dabate hain, event listener trigger hota hai
window.addEventListener("keydown", () => {
  // h1 ka text update hota hai current index wale naam se
  h1.textContent = names[index];
  // Index ko agle naam par le jaate hain, agar last ho gaya toh fir se 0 ho jayega
  index = (index + 1) % names.length;
});
