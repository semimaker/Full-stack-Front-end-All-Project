document.addEventListener('DOMContentLoaded', function () {

    var calendarEl = document.getElementById('calendar');

    window.calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,

        events: [
            { id: "2026-04-14", title: "일정1", start: "2026-04-14" },
            { id: "2026-04-15", title: "일정2", start: "2026-04-15" }
        ],

        dateClick: function (info) {
            console.log("클릭 날짜 : " + info.dateStr);
            setCurrentDate(info.Calendar);
            //removeEventFromCalendar(info.dateStr);
        }
    });

    calendar.render();
});

function addCalendarEvent(event) {
    calendar.addEvent(event);
}

function removeEventFromCalendar(id) {

    var calendarEvent = calendar.getEventById(id);

    if (calendarEvent) {
        calendarEvent.remove();
    }
}


/*    
}document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        events: [{ id: "2026-04-14", start: "2026-04-14" }, { id: "2026-04-15", start: "2026-04-15" }],

        dateClick: function (info) {
            console.log("Clicked event occurs : date = " + info.dateStr);

            removeEventFromCalender(info.Calendar);

        }
    });
    calendar.render();
});

function addEventListener(event) {
    calender.addEvent(event);
}
function removeEventFromCalender(id) {
    var calendarEvent = calender.getElementById(id);
    calenderEvent.remove();
}
*/