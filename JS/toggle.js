// toggle.js
export function toggleAlgumaCoisa() {
  console.log("DOMContentLoaded")
  document.addEventListener("DOMContentLoaded", function () {
    const portfolioButton = document.getElementById("portfolioButton");
    const toggleImage = document.getElementById("toggleImage");
    const linkedinImage = document.getElementById("linkedinImage");
  
    portfolioButton.addEventListener("click", function () {
        // Adicione aqui o código para rolar até o topo
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
  
    toggleImage.addEventListener("click", function () {
        const currentImage = toggleImage.querySelector("img").getAttribute("src");
        const newImage = currentImage.includes("sol.svg") ? "Imagens/lua.svg" : "Imagens/sol.svg";
        toggleImage.querySelector("img").setAttribute("src", newImage);
    });
  
    if (linkedinImage) {
        linkedinImage.addEventListener("click", function () {
            window.open("https://www.linkedin.com/in/ronan-pinheiro-ot%C3%A1vio-37173425b/", '_blank');
        });
    }
  });
}
