const peopleInformation = {
  // Bill Anderson
  billAnderson: {
    name: "Bill Anderson",
    jobType: "THE BOSS",
    summary:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },

  //Susan Smith
  susanSmith: {
    name: "Susan Smith",
    jobType: "WEB DEVELOPER",
    summary:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },

  // Anna Johnson
  annaJohnson: {
    name: "Anna Johnson",
    jobType: "WEB DESIGNER",
    summary:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },

  // Peter Jones
  peterJones: {
    name: "Peter Jones",
    jobType: "INTERN",
    summary:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
};
const arr = [
  peopleInformation.billAnderson,
  peopleInformation.susanSmith,
  peopleInformation.annaJohnson,
  peopleInformation.peterJones,
];
// Selectors
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const random = document.querySelector(".randomizer");
const nameEl = document.querySelector(".name");
const jobTypeEl = document.querySelector(".job-type");
const summaryEL = document.querySelector(".summary");

(function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  nameEl.textContent = arr[randomNum].name;
  jobTypeEl.textContent = arr[randomNum].jobType;
  summaryEL.textContent = arr[randomNum].summary;
  1;
})();

let randomNum;
let currentPosition = 0;
random.addEventListener("click", function () {
  randomNum = Math.floor(Math.random() * 3) + 1;
  nameEl.textContent = arr[randomNum].name;
  jobTypeEl.textContent = arr[randomNum].jobType;
  summaryEL.textContent = arr[randomNum].summary;
  1;
});
right.addEventListener("click", function () {
  currentPosition++;
  if (currentPosition > 3) currentPosition = 0;
  nameEl.textContent = arr[currentPosition].name;
  jobTypeEl.textContent = arr[currentPosition].jobType;
  summaryEL.textContent = arr[currentPosition].summary;
});
left.addEventListener("click", function () {
  if (currentPosition === 0) {
    currentPosition = 3;
  } else {
    currentPosition--;
  }
  nameEl.textContent = arr[currentPosition].name;
  jobTypeEl.textContent = arr[currentPosition].jobType;
  summaryEL.textContent = arr[currentPosition].summary;
});
