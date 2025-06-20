document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("goToSite");
  button.addEventListener("click", function () {
    const url = "https://pesnyary.by";
    const win = window.open(url, "_blank");

    if (!win) {
      alert("Откройте всплывающие окна для этого сайта, чтобы перейти.");
    }
  });
});
