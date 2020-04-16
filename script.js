const $bars = document.querySelector(".bars");
const $mobileList = document.querySelector(".mobile-list");

$bars.addEventListener("click", () => {
  $mobileList.childNodes.forEach((listItem) => {
    if (listItem.nodeType === 1) {
      if (listItem.style.display === "none") {
        listItem.style.display = "block";
        $mobileList.style.marginTop = "16px";
      } else {
        listItem.style.display = "none";
        $mobileList.style.marginTop = "0px";
      }
    }
  });
});
