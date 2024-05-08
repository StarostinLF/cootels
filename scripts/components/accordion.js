const accordionList = document.querySelector(".section__accordion-list"),
  accordionItems = accordionList.querySelectorAll(".section__accordion-item"),
  accordionTexts = accordionList.querySelectorAll(".accordion__text");

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    const accordionText = item.querySelector(".accordion__text"),
      accordionIconContainer = accordionText.querySelector(
        ".accordion__icon-container"
      );

    accordionTexts.forEach((text) => {
      if (text.classList.contains("accordion__text_opened"))
        text.classList.remove("accordion__text_opened");
    });

    accordionText.classList.toggle("accordion__text_opened");
    accordionIconContainer.classList.toggle("accordion__icon-container_opened");
  });
});
