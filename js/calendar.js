// // Function to show event details in a modal
function showEvent(eventDate) {
    const eventDetails = "This is a test to see how well this thing works. dique it will work " + eventDate//events[eventDate - 1];
    document.getElementById("eventDetails").innerHTML = eventDetails;
    $('#eventModal').modal('show');
}
  

const calendarData = [
  // Week 1
  [
    { events: [ { text: "References", url: "/references.html" }, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, { text: "Office Meeting - Remind Pres about day in the life videos", color: "red" } ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
  ],
  // Week 2 ...
  [
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"},  { text: "Confirm with the Translator for the devotional", color: "red", boxColor: "#fbe69c", url: "/devotional.html" }, { text: "Follow up on the day in the life videos"}, {text: "Load up technology in the car for ZC", color: "red"}, {text: "Choose winners for referral rewards and buy treats"} ] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Zone Conference - Los Restauradores/Villa Mella", boxColor: "#fbe69c"} ] },
    { events: [ { text: "References", url: "/references.html" }, {text: "Zone Conference - Los Alcarrizos/Duarte", boxColor: "#fbe69c" }, {text: "Make sure you get the day in the life videos"} ] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Zone Conference - San Francisco/Bonao-Cotui", boxColor: "#fbe69c" }] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Prepare slideshow for the devotional - Baptism pictures, new missionary pictures, day in the life videos", url: "/devotional.html", color: "red"}] },
    { events: [ { text: "References", url: "/references.html"}, {text: "New Missionary Devotional", url: "/devotional.html", color: "red"}] },
  ],
  // Week 3...
  [
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Office Meeting, Interviews", color: "red"} ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
  ],
  // Week 4...
  [
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"},  { text: "Make sure you have the Technology in the car", color: "red", boxColor: "#fbe69c" } ] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Trainer Orientation", boxColor: "#fbe69c" }] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
  ],
  // Week 5...
  [
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Confirm with the translator for the devotional", url: "/devotional.html", color: "red"} ] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Ask missionaries who are departing for a few photos and their favorite scripture"}, {text: "Make the departing missionary video"}] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Office Meeting", color: "red"}, {text: "Make sure that the departing missionary slideshow is good and that the video is made and on google drive", url: "/devotional.html", color: "red"}, {text: "See which areas are opening - ask the APs - and email Jafanny to setup enough chips"}] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Departing Missionary Devotional", url: "/devotional.html", color: "red"} ] },
  ],
  // Week 6...
  [
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Make sure that greenie day slideshow is good, a few phones are prepped just in case"}, {text: "Greenie Day", color: "red", url: "/greenieDay.html"}, {text: "Collect phone data for new missionaries"} ] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Transfers - *Make sure that you have the HDMI cord*", color: "red"}, {text: "Check the new areas and make sure that they are setup correctly - Can use PMG and recieve referrals"}, {text: "Make sure that all new areas also have their new phone number assigned in the Teaching Areas List"}] },
    { events: [ { text: "References", url: "/references.html"}, {text: "Update telephone data sheet - add new phones and save dead missionary phone data"}] },
    { events: [ { text: "References", url: "/references.html"}, ] },
    { events: [ { text: "References", url: "/references.html"}, ] },
  ],
];


const monthCalendarData = [
  {
    title: 'MLC in person',
    rrule: "FREQ=MONTHLY;BYDAY=1TU"
  },
  {
    title: 'Get reports for stake presidents ready',
    rrule: "FREQ=MONTHLY;BYMONTHDAY=10",
    color: '#FF0000'
  },
  {
    title: 'Meeting with Jafanny',
    rrule: {
      freq: 'monthly',
      byweekday: ['th'],
      bysetpos: -1, // last Thursday
      dtstart: '2025-04-01T11:30:00' // can be the first valid month; only time is used here
    },
    color: '#000000'
  },
  {
    title: 'Videos for social media are due',
    rrule: "FREQ=MONTHLY;BYMONTHDAY=20",
    color: '#FF00FF'
  },
];

function renderCalendar() {
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = '';

  const dayHeaders = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const grid = document.createElement('div');
  grid.classList.add('calendar-grid');

  // First cell in header row: empty corner
  const cornerCell = document.createElement('div');
  cornerCell.classList.add('calendar-cell', 'calendar-header');
  grid.appendChild(cornerCell);

  // Add weekday headers
  dayHeaders.forEach(day => {
    const cell = document.createElement('div');
    cell.classList.add('calendar-cell', 'calendar-header');
    cell.textContent = day;
    grid.appendChild(cell);
  });

  // Add 6 weeks of rows (6 week labels + 6*7 = 42 day cells)
  for (let week = 0; week < calendarData.length; week++) {
    // Week label
    const weekLabel = document.createElement('div');
    weekLabel.classList.add('calendar-cell', 'week-label');
    weekLabel.textContent = `Week ${week + 1}`;
    grid.appendChild(weekLabel);
  
    for (let day = 0; day < 7; day++) {
      const dayData = calendarData[week][day];
      const cell = document.createElement('div');
      cell.classList.add('calendar-cell');
  
      // If boxColor is set on any event, apply it to the whole cell
      const boxColor = dayData.events.find(e => e.boxColor)?.boxColor;
      if (boxColor) {
        cell.style.backgroundColor = boxColor;
      }
  
      // Add event list
      dayData.events.forEach(event => {
        const eventEl = document.createElement('div');
      
        if (event.url) {
          const link = document.createElement('a');
          link.href = event.url;
          link.textContent = event.text;
          link.style.color = event.color || "inherit"; // inherit color or use specified
          link.style.textDecoration = "underline";
          link.target = "_self"; // or "_blank" to open in a new tab
          eventEl.appendChild(link);
        } else {
          eventEl.textContent = event.text;
          if (event.color) {
            eventEl.style.color = event.color;
          }
        }
      
        cell.appendChild(eventEl);
      });
      
  
      grid.appendChild(cell);
    }
  }
  

  calendar.appendChild(grid);
}
  
function renderMonthlyCalendar() {
  const calendarEl = document.getElementById('fullcalendar-container');

    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
        height: 'auto',
        events: monthCalendarData,
    });

    calendar.render();
}


document.addEventListener("DOMContentLoaded", renderCalendar);
document.addEventListener("DOMContentLoaded", renderMonthlyCalendar);
  
