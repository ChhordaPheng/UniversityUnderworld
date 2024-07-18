const teachers = [
  {
    name: "នាយក ផេង​ ឆដា",
    position: "Director, Computer Science Department",
    national: "Phnom Penh",
    img: "../image/t1.png",
  },
  {
    name: "បណ្ឌិត សេង សុខហេង",
    position: " Professor, Information Technology ",
    national: " បន្ទាយមានជ័យ",
    img: "../image/t2.png",
  },
  {
    name: "អគ្គនាយក ហួន ចរិយា",
    position: "Senior Lecturer, Information Technology ",
    national: " តាកែវ",
    img: "../image/t3.png",
  },
  {
    name: " បណ្ឌិត ជា សុភ័ក្រ ",
    position: "Dean, Faculty of Computer Science ",
    national: "សៀមរាប ",
    img: "../image/t4.png",
  },
  {
    name: " បណ្ឌិត មាន ព្រំស្រីពេជ្រ",
    position: "Assistant Professor, Software Engineering ",
    national: "កំពង់ចាម ",
    img: "../image/t5.png",
  },
  {
    name: " អគ្គនាយក ប៊ុន សុផល",
    position: " Director, Information Systems",
    national: "ស្វាយរៀង ",
    img: "../image/t6.png",
  },
  {
    name: " បណ្ឌិត ងួន ម៉ាលិស",
    position: " Senior Lecturer, Computer Networks",
    national: "កំពង់ធំ ",
    img: "../image/t7.png",
  },
  {
    name: "សាស្ត្រាចារ្យ សេង សុខហេង ",
    position: " Professor, Cybersecurity",
    national: " ព្រះវិហារ",
    img: "../image/t8.png",
  },
  {
    name: "បណ្ឌិត វី សុខា ",
    position: " Lecturer, Data Science",
    national: "កែប ",
    img: "../image/t9.png",
  },
  {
    name: " សាស្ត្រាចារ្យ គ្រី ឧត្តម",
    position: " Senior Lecturer, Artificial Intelligence",
    national: " ឧត្តរមានជ័យ",
    img: "../image/t10.png",
  },
  {
    name: " បណ្ឌិត សាម ឡៃហួរ",
    position: "Professor, Machine Learning ",
    national: " កោះកុង",
    img: "../image/t11.png",
  },
  {
    name: " សាស្ត្រាចារ្យ យូរ សុធារ៉ា",
    position: "Assistant Professor, Information and Communication Technology ",
    national: "ក្រចេះ ",
    img: "../image/t12.png",
  },
];
let lecturers = document.getElementById("teachers");
function lecturer() {
  let html = "";
  for (items of teachers) {
    html += `
            <div class="card-teacher">
                <img class="img-fluid rounded" src="${items.img}" alt="">
                <div class="p-1 text-white">
                    <h1 class="text-uppercase fs-5 mx-4 my-1 ">${items.name}</h1>
                    <div class="bg-white w-100 my-3 " style="height: 1px;"></div>
                    <p class="fs-6 text-warning">${items.national}</p>
                    <p class="text-white">${items.position}</p>
                </div>
            </div>
        `;
  }
  lecturers.innerHTML += html;
}
lecturer();

const services = [
  {
    name: "សញ្ញាបត្រ",
    img: "../image/sevice1.png",
  },
  {
    name: "ការងារ",
    img: "../image/service2.png",
  },
  {
    name: "សិក្សាតាមប្រព័ន្ធអនឡាញ",
    img: "../image/service3.png",
  },
  {
    name: "ការសិក្សាវគ្គខ្លិ",
    img: "../image/service4.png",
  },
  {
    name: "ការប្រើប្រាស់កុំព្យូទ័រ",
    img: "../image/service5.png",
  },
  {
    name: "បើកដំណើរការ ២៤/៧",
    img: "../image/service6.png",
  },
  {
    name: "បរិញ្ញាបត្រ",
    img: "../image/service7.png",
  },
  {
    name: "កាដូរអនុស្សាវរីយ៍",
    img: "../image/service8.png",
  },
];
let works = document.getElementById("services");
function work() {
  let html = "";
  for (items of services) {
    html += 
    `
        <div class="service">
            <img class="img-fluid" src="${items.img}" alt="" style="width: 45%; height: 60%;">
            <p class="text-warning py-3 text-center">${items.name}</p>
        </div>
    `;
  }
  works.innerHTML += html;
}
work();
