let diary2List = ["Keep clicking me.", "We have reached the moon!", "It’s been 2 days since my last diary, but we are here!", "We landed a few hours ago.", "In about an hour from now I will be going on my first spacewalk!", "This has been my dream since I was a little kid.", "Mom and Dad, if you ever see this…I did it!", "Miss you guys.", "The moon is empty.", "No water.", "No atmosphere.", "Just metal and rock.", "My team is calling me!", "Time to go!", "Talk soon."];

let count2 = 1;
let element2 = document.getElementById("diary2");
element2.innerHTML = diary2List[0];
element2.onclick = function () {
  if(count2 <= diary2List.length - 1) {
    element2.innerHTML = diary2List[count2];
    count2 += 1;
  }
}