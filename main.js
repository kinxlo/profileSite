console.log(`main js added`);
const nameDiv = document.querySelector("#name");
const trackDiv = document.querySelector("#track");
const linkDiv = document.querySelector("#link");
const weekDiv = document.querySelector("#week");
const timeDiv = document.querySelector("#time");

class Profile {
  constructor(name, track, githubUrl) {
    this.name = name;
    this.track = track;
    this.githubUrl = githubUrl;
  }

  setAttribute() {
    nameDiv.textContent = this.name;
    trackDiv.textContent = this.track;
    linkDiv.href = this.githubUrl;
  }

  getDayOfTheWeek() {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date();
    const dayIndex = date.getDay();

    return weekdays[dayIndex];
  }

  getTimeInMilliseconds() {
     const now = new Date();

     // Use the toISOString() method to get the time in the desired format
     const currentTimeISOString = now.toISOString();

     return currentTimeISOString;
  }
}

const me = new Profile(
  `Just Code it`,
  `Frontend`,
  `https://github.com/kinxlo/profileSite`
);
me.setAttribute();
weekDiv.textContent = me.getDayOfTheWeek();
timeDiv.textContent = me.getTimeInMilliseconds();
