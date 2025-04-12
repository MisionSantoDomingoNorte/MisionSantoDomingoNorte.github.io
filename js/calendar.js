// let events = [
//     // Monday       Tuesday     Wednesday       Thursday    Friday          Saturday        Sunday
//     // week 1 
//     'References', 'References', 'References', 'References', 'References', ['References', 'Office Meeting'], 'References',
//     // week 2 
//     'References', 'References', 'References', 'References', 'References', 'References', ['References', 'Sunday Devotional'],
//     // week 3 
//     'References', 'References', 'References', 'References', 'References', ['References', 'Office Meeting'], 'References',
//     // week 4
//     'References', 'References', 'References', 'References', ['References', 'New Missionary Training'], 'References', 'References',
//     // week 5
//     'References', 'References', 'References', 'References', 'References', ['References', 'Office Meeting'], ['References', 'Sunday Devotional'],
//     // week 6
//     'References', 'References', ['References', 'Greenie Day'], ['References', 'Transfers'], 'References', 'References', 'References',
// ]


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
  
document.addEventListener("DOMContentLoaded", renderCalendar);
  

  /*
     <div class="schedule-container">
     <!-- header -->
    <div class="week-label"></div>
    <div class="week-label">Monday</div>
    <div class="week-label">Tuesday</div>
    <div class="week-label">Wednesday</div>
    <div class="week-label">Thursday</div>
    <div class="week-label">Friday</div>
    <div class="week-label">Saturday</div>
    <div class="week-label">Sunday</div>

     <!-- Week 1 -->
     <div class="week-label">Week 1</div>
     <div class="day-box" onclick="showEvent(1)">1</div>
     <div class="day-box" onclick="showEvent(1)">2</div>
     <div class="day-box" onclick="showEvent(3)">3</div>
     <div class="day-box" onclick="showEvent(4)">4</div>
     <div class="day-box" onclick="showEvent(5)">5</div>
     <div class="day-box" onclick="showEvent(6)">6</div>
     <div class="day-box" onclick="showEvent(7)">7</div>

     <!-- Repeat for Weeks 2 to 6 -->
     <div class="week-label">Week 2</div>
     <div class="day-box" onclick="showEvent(8)">8</div>
     <div class="day-box" onclick="showEvent(9)">9</div>
     <div class="day-box" onclick="showEvent(10)">10</div>
     <div class="day-box" onclick="showEvent(11)">11</div>
     <div class="day-box" onclick="showEvent(12)">12</div>
     <div class="day-box" onclick="showEvent(13)">13</div>
     <div class="day-box" onclick="showEvent(14)">14</div>

     <!-- Week 3 -->
     <div class="week-label">Week 3</div>
     <div class="day-box" onclick="showEvent(15)">15</div>
     <div class="day-box" onclick="showEvent(16)">16</div>
     <div class="day-box" onclick="showEvent(17)">17</div>
     <div class="day-box" onclick="showEvent(18)">18</div>
     <div class="day-box" onclick="showEvent(19)">19</div>
     <div class="day-box" onclick="showEvent(20)">20</div>
     <div class="day-box" onclick="showEvent(21)">21</div>
     <!-- Week 4 -->
     <div class="week-label">Week 4</div>
     <div class="day-box" onclick="showEvent(22)">22</div>
     <div class="day-box" onclick="showEvent(23)">23</div>
     <div class="day-box" onclick="showEvent(24)">24</div>
     <div class="day-box" onclick="showEvent(25)">25</div>
     <div class="day-box" onclick="showEvent(26)">26</div>
     <div class="day-box" onclick="showEvent(27)">27</div>
     <div class="day-box" onclick="showEvent(28)">28</div>

     <!-- Week 5 -->
     <div class="week-label">Week 5</div>
     <div class="day-box" onclick="showEvent(29)">29</div>
     <div class="day-box" onclick="showEvent(30)">30</div>
     <div class="day-box" onclick="showEvent(31)">31</div>
     <div class="day-box" onclick="showEvent(32)">32</div>
     <div class="day-box" onclick="showEvent(33)">33</div>
     <div class="day-box" onclick="showEvent(34)">34</div>
     <div class="day-box" onclick="showEvent(35)">35</div>
     <!-- Week 6 -->
     <div class="week-label">Week 6</div>
     <div class="day-box" onclick="showEvent(36)">36</div>
     <div class="day-box" onclick="showEvent(37)">37</div>
     <div class="day-box" onclick="showEvent(38)">38</div>
     <div class="day-box" onclick="showEvent(39)">39</div>
     <div class="day-box" onclick="showEvent(40)">40</div>
     <div class="day-box" onclick="showEvent(41)">41</div>
     <div class="day-box" onclick="showEvent(42)">42</div>

     <!-- Repeat for Week 3 to Week 6 as needed -->
     <!-- Week 3, Week 4, Week 5, and Week 6 go here -->
   </div>*/