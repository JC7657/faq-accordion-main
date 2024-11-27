const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.closest(".accordion-item");
    const paragraph = accordionItem.querySelector(".accordion-paragraph");
    const img =
      button.querySelector("img") ||
      button.nextElementSibling.querySelector("img");

    toggleParagraph(paragraph);
    toggleImage(img);
  });
});

function toggleParagraph(paragraph) {
  const isCollapsed = paragraph.classList.contains("max-h-0");

  paragraph.classList.toggle("max-h-0", !isCollapsed);
  paragraph.classList.toggle("scale-y-0", !isCollapsed);
  paragraph.classList.toggle("scale-y-100", isCollapsed);
  paragraph.classList.toggle("max-h-full", isCollapsed);
}

function toggleImage(img) {
  const isPlusIcon = img.src.includes("icon-plus");

  img.src = isPlusIcon
    ? "./assets/images/icon-minus.svg"
    : "./assets/images/icon-plus.svg";
}
