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
  { events: [ {text: ""} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ {text: ""} ] },
],
// Week 2 ...
[
  { events: [ {text: ""} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Pay Apoyos & Reimbursements for missionaries"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ {text: ""} ] },
],
// Week 3...
[
  { events: [ {text: ""} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ {text: ""} ] },
],
// Week 4...
[
  { events: [ {text: ""} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Pay Apoyos & Reimbursements for missionaries"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ {text: ""} ] },
],
// Week 5...
[
  { events: [ {text: ""} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ {text: ""} ] },
],
// Week 6...
[
  { events: [ {text: ""} ] },
  { events: [ { text: "Pay Apoyos & Reimbursements for Missionaries", }, ] },
  { events: [ { text: "Greenie Day: Get Money for Guagua (San Francisco)", }, { text: "Finance Presentation", } ] },
  { events: [ { text: "Transfers: Give money to Guagua Driver", color: "red"}, {text: "Collect MSF Cards and extra apoyo from departing missionaries"}, {text: "Give paper to Greenies of their PINs and basic instructions of credit card use"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ { text: "Reconcile Credit Card Changes", }, {text: "Check EdeNorte Pending Payments"}, {text: "Vendor Payments"} ] },
  { events: [ {text: ""} ] },
],
];


const monthCalendarData = [
{
  title: 'Pay Edesur Power',
  rrule: "FREQ=MONTHLY;BYMONTHDAY=18",
  color: "#f58d42"
},
{
  title: 'Pay Lott\'s Internet Bill',
  rrule: "FREQ=MONTHLY;BYMONTHDAY=5",
  color: '#FF0000'
},
{
  title: 'Pay Edeeste Power',
  rrule: "FREQ=MONTHLY;BYMONTHDAY=20",
  color: '#F0D736'
},
{
  title: 'Pay all Vendors for the Current Month',
  rrule: "FREQ=MONTHLY;BYMONTHDAY=20",
  color: '#FF00FF'
},
{
  title: 'Pay Rent for the Following Month',
  rrule: "FREQ=MONTHLY;BYMONTHDAY=25",
  color: '#d142f5'
},
// {
//   title: 'Meeting with Jafanny',
//   rrule: {
//     freq: 'monthly',
//     byweekday: ['th'],
//     bysetpos: -1, // last Thursday
//     dtstart: '2025-04-01T11:30:00' // can be the first valid month; only time is used here
//   },
//   color: '#000000'
// },
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
