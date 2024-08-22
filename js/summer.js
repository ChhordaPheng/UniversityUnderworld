import { cleans } from "../js/data-event.js";

  let cleansContainer = document.getElementById('cleans');

  function renderEvents() {
    let html = "";
    for (let i = 0; i < cleans.length; i++) {
      if (i !== 3) {
        let items = cleans[i];
          html += `
              <a href="${items.link}" class="text-decoration-none">
                <div class="d-flex rounded justify-content-start" style="background-color: rgb(69, 67, 67);">
                  <div class="event">
                    <img src="${items.Image}" alt="${items.title}" />
                  </div>
                  <div class="p-2 event-text">
                    <h5 class="fw-bold text-white">${items.title}</h5>
                    <p >
                     ${items.script}
                    </p>
                  </div>
                </div>
              </a>     
          `;
      }
    }
    cleansContainer.innerHTML += html;
  };
  document.addEventListener("DOMContentLoaded", renderEvents);

