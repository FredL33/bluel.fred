
// async function api() {
//     let response = await fetch("http://localhost:5678/api/works");
//     let commits = await response.json();
//     return commits;

// }
// let pictureList = document.getElementById("gallery");

// function addToGallery() {
//     const getApi = (async () => {
//         // on récupére le tableau
//         const works = await api();  
//         //  on créé une boucle qui parcours ce tableau
//         for (let i = 0; i <= works.length; i++) {
//             // on créé une div qu'on apparente avec une balise existante
//             let add = pictureList.appendChild(document.createElement("div"));
//             // on créé une balise pour chaque image du tableau qu'on apparente avec la div créée précédemment
//             let addImg = add.appendChild(document.createElement("img"))
//             // on lui affecte chaque valeur du tableau
//             addImg.src = works[i].imageUrl
//             // pour les titres, idem que pour les images
//             let addText = add.appendChild(document.createElement("p"))
//             addText.textContent = works[i].title
//         }
//     })();
// }
// addToGallery()

// // Configuration des boutons
// const filterContainer = document.querySelector('.filterContainer')
// const setupButtons = (works, filterContainer, displayContainer) => {
//     const btnAll = createElemWithText("button", "Tous");
//     btnAll.addEventListener("click", () => addToGallery());
//     filterContainer.appendChild(btnAll);
//     const uniqueCategories = [
//       ...new Set(works.map((work) => work.category.name)),
//     ];
//     uniqueCategories.forEach((category) => {
//       const btn = createElemWithText("button", category);
//       btn.addEventListener("click", () => {
//         const filteredWorks = works.filter(
//           (work) => work.category.name === category
//         );
//         addToGallery();
//       });
//       filterContainer.appendChild(btn);
//     });
//   };
//   const createElemWithText = (tag, text) => {
//     const elem = document.createElement(tag);
//     elem.innerText = text;
//     return elem;
//   };
  
//   setupButtons()



