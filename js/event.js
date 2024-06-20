const events = [
    {
        Image : "../image/charity.jpg",
        date : "05",
        month : "July",
        year : "2024",
        title : "ការបរិច្ចាកឈាម",
        time : "9:00 am - 12:00 pm",
    },
    {
        Image : "../image/cityCleanUp.jpg",
        date : "12",
        month : "jan",
        year : "2024",
        title : "សម្អាតបរិស្ថាន",
        time : "3:00 pm - 6:00 pm",
    },
    {
        Image : "../image/concert.jpg",
        date : "25",
        month : "sep",
        year : "2024",
        title : "ការប្រគុំតន្រ្តី",
        time : "10:00 am - 10:00 pm",
    },
    {
        Image : "../image/summer.avif",
        date : "22",
        month : "June",
        year : "2024",
        title : "ការលំហែរនៅរដូវក្ដៅ",
        time : "2:00 pm - 5:00 pm",
    },
    {
        Image : "../image/trip.jpg",
        date : "10",
        month : "may",
        year : "2024",
        title : "បោះជំរុំ",
        time : "11:00 am - 2:00 pm",
    },
    {
        Image : "../image/khmer-new-year.jpg",
        date : "14",
        month : "April",
        year : "2024",
        title : "ពិធីបុណ្យចូលឆ្នាំខ្មែរ",
        time : "1:00 pm - 3:00 pm",
    },
    {
        Image : "../image/pchum-ben.jpg!w700wp",
        date : "05",
        month : "July",
        year : "2024",
        title : "ភ្ជុំបិណ្ឌ",
        time : "8:00 am - 11:00 am",
    },
    {
        Image : "../image/x-mas.avif",
        date : "25",
        month : "Dec",
        year : "2024",
        title : "Christmas",
        time : "7:00 pm - 11:00 pm",
    },
];

let eventsContainer = document.getElementById('events');

function renderEvents() {
    let html = "";
    for (let items of events) {
        html += `
            <div class="event-card col-lg-3 col-md-4 col-sm-12 col-12 ">
                <img class=" rounded h-50 object-fit-cover " style="width: 95%;"  src="${items.Image}" alt="">
                <div class="col-12 d-flex mt-3 ">
                    <div class="col-2 ">
                        <h1 class="text-warning" style="margin-top:-8px;">${items.date}</h1>
                        <p class="text-uppercase">${items.month}</p>
                        <p class="" style="margin-top:px;">${items.year}</p>
                        <div class="border border-warning w-75"></div>
                    </div>
                    <div class="col-10 ">
                        <h5 class="fw-bold text-white pt-2">${items.title}</h5>
                        <div class="d-flex pt-2">
                            <i class="fa-regular fa-clock pt-1"></i>
                            <p class="px-3">${items.time}</p>
                        </div>
                        <div class="d-flex">
                            <i class="fa-solid fa-location-dot pt-1"></i>
                            <p class="px-3">Underworld University</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    eventsContainer.innerHTML += html;
}

renderEvents();