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

  getCurrentTimeMilliseconds() {
    return new Date().getTime();
  }

  getTimeInMilliseconds() {
    setInterval(function () {
      const currentTime = new Date().getTime();
      timeDiv.textContent = currentTime;
    }, 1000);
  }
}

const me = new Profile(
  `Just code it`,
  `Frontend`,
  `https://github.com/kinxlo/profileSite`
);
me.setAttribute();
weekDiv.textContent = me.getDayOfTheWeek();
me.getTimeInMilliseconds();
