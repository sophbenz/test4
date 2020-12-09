let diary3List = ["Keep clicking me.", "WOW", "What an incredible experience this has been!", "We have been on the moon for 2 days so far.", "We are spending the next 10 days here to explore and do research.", "Every 2 days we will be moving to a new spot.", "My crewmate has taken a ton of incredible pictures I can’t wait to check out.", "This is a fun experience, but we also have a job to do.", "Our main job is to maintance and deploy LRV’S.", "LRV is short for Lunar Roving Vehicle.", "I like to call them moonbuggies.", "They transvere the surface of the moon.", "I’m going to go eat now with the crew.", "Talk soon."];

let count3 = 1;
let element3 = document.getElementById("diary3");
element3.innerHTML = diary3List[0];

element3.onclick = function () {
  if(count3 <= diary3List.length - 1) {
    element3.innerHTML = diary3List[count3];
    count3 += 1;
  }
}