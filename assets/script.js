const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

const accordionHeaders = document.querySelectorAll('.accordion-header');


function setTab(event, tab) {
    tabs.forEach(item => {
        item.classList.remove('active');
        item.setAttribute("aria-selected", "false"); // o que é aria-selected ?
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    contents.forEach(content => {
        content.classList.remove("active");
        content.hidden = true;
    })

    const target = document.getElementById(tab.dataset.tab);

    target.classList.add("active");
    target.hidden = false;
}


function openTab(event, header) {
    const accordion = header.closest(".accordion");
    const body = accordion.querySelector(".accordion-body");

    const button = accordion.querySelector('button');
    console.log(button)

    const isExpanded = header.getAttribute("aria-expanded") === "true";

    header.setAttribute("aria-expanded", !isExpanded);

    body.hidden = isExpanded;

    accordion.classList.toggle("active", !isExpanded);
    button.classList.toggle("active", !isExpanded);
    button.classList.toggle('rotate');
}


function core() {
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            setTab(event, tab);
        });
    });

    accordionHeaders.forEach(header => {
        header.addEventListener('click', (event) => {
            openTab(event, header);
        });
    })

}

core()