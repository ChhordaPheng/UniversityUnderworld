const courses = [
    {
        img: "../image/course1.png",
        title: "ការសិក្សា",
        detail:
            "ពួកយើងផ្ដោតសំខាន់ជាពិសេសទៅលើការអប់ជាចម្បងដើម្បីឲ្យមានធនធានដ៏ល្អក្នងសង្គម ។",
    },
    {
        img: "../image/course2.png",
        title: "វិជ្ជាជីវៈ",
        detail:
            "ជំនាញពិតជាសំខាន់ខ្លាំងក្នុងការធ្វើឲ្យជីវិតរបស់អ្នកប្រសើរឡើងជាងមុន​ ។",
    },
    {
        img: "../image/course3.png",
        title: "ការស្រាវជ្រាវ",
        detail:
            "ការស្រាវជ្រាវឬការស្វ័យសិក្សាដោយខ្លួនឯងគឺពិតជាធ្វើឲ្យជីវិតរបស់អ្នកកាន់រីកចម្រើនជាងមុនលើការសិក្សា​ ។",
    },
    {
        img: "../image/course4.png",
        title: "ការគ្រប់គ្រង",
        detail: "ពួកយើងនឹងគ្រប់គ្រងទៅលើការសិក្សារបស់សិស្សជាពិសេសនិងចាំបាច់ផងដែរ​ ។",
    },
];
let subjects = document.getElementById("courses");
function subject() {
    let html = "";
    for (items of courses) {
        html += `
            <div class="col-lg-3 col-md-4 col-sm-4 col-12 courses">
                <div class="course text-center ">
                    <img class="img-fluid rounded-xl " src="${items.img}" alt="">
                    <h4 class="text-warning fw-bold my-3">${items.title}</h4>
                    <p>${items.detail}</p>
                </div>
            </div>    
        `;
    }
    subjects.innerHTML += html;
}
subject();
