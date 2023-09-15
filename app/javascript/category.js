function initializeCategorySelect() {
  const categorySelects1 = document.getElementById("category-select1");
  const categorySelects2 = document.getElementById("category-select2");
  const categorySelects3 = document.getElementById("category-select3");

  const typeB = document.getElementById("type-b");
  const typeC = document.getElementById("type-c");
  const typeD = document.getElementById("type-d");
  const typeE = document.getElementById("type-e");
  const typeF = document.getElementById("type-f");
  const typeG = document.getElementById("type-g");
  const typeH = document.getElementById("type-h");
  const typeI = document.getElementById("type-i");
  const typeJ = document.getElementById("type-j");
  const typeK = document.getElementById("type-k");
  const typeL = document.getElementById("type-l");
  const typeM = document.getElementById("type-m");
  const typeN = document.getElementById("type-n");
  const typeO = document.getElementById("type-o");
  const typeP = document.getElementById("type-p");

  categorySelects1.addEventListener("change", function () {
    const categorySelectedId1 = parseInt(categorySelects1.value);
    if (categorySelectedId1 === 2) {
      typeB.style.display = "block";
      typeC.style.display = "none";
      typeD.style.display = "none";
      typeE.style.display = "none";
      typeF.style.display = "none";
    } else if (categorySelectedId1 === 3) {
      typeB.style.display = "none";
      typeC.style.display = "block";
      typeD.style.display = "none";
      typeE.style.display = "none";
      typeE.style.display = "none";
    } else if (categorySelectedId1 === 4) {
      typeB.style.display = "none";
      typeC.style.display = "none";
      typeD.style.display = "block";
      typeE.style.display = "none";
      typeF.style.display = "none";
    } else if (categorySelectedId1 === 5) {
      typeE.style.display = "none";
      typeC.style.display = "none";
      typeD.style.display = "none";
      typeE.style.display = "block";
      typeF.style.display = "none";
    } else if (categorySelectedId1 === 6) {
      typeF.style.display = "none";
      typeC.style.display = "none";
      typeD.style.display = "none";
      typeE.style.display = "none";
      typeF.style.display = "block";
    }
  });
  categorySelects2.addEventListener("change", function () {
    const categorySelectedId2 = parseInt(categorySelects2.value);
    if (categorySelectedId2 === 2) {
      typeG.style.display = "block";
      typeH.style.display = "none";
      typeI.style.display = "none";
      typeJ.style.display = "none";
      typeK.style.display = "none";
    } else if (categorySelectedId2 === 3) {
      typeG.style.display = "none";
      typeH.style.display = "block";
      typeI.style.display = "none";
      typeJ.style.display = "none";
      typeK.style.display = "none";
    } else if (categorySelectedId2 === 4) {
      typeG.style.display = "none";
      typeH.style.display = "none";
      typeI.style.display = "block";
      typeJ.style.display = "none";
      typeK.style.display = "none";
    } else if (categorySelectedId2 === 5) {
      typeG.style.display = "none";
      typeH.style.display = "none";
      typeI.style.display = "none";
      typeJ.style.display = "block";
      typeK.style.display = "none";
    } else if (categorySelectedId2 === 6) {
      typeG.style.display = "none";
      typeH.style.display = "none";
      typeI.style.display = "none";
      typeJ.style.display = "none";
      typeK.style.display = "block";
    }
  });
  categorySelects3.addEventListener("change", function () {
    const categorySelectedId3 = parseInt(categorySelects3.value);
    if (categorySelectedId3 === 2) {
      typeL.style.display = "block";
      typeM.style.display = "none";
      typeN.style.display = "none";
      typeO.style.display = "none";
      typeP.style.display = "none";
    } else if (categorySelectedId3 === 3) {
      typeL.style.display = "none";
      typeM.style.display = "block";
      typeN.style.display = "none";
      typeO.style.display = "none";
      typeP.style.display = "none";
    } else if (categorySelectedId3 === 4) {
      typeL.style.display = "none";
      typeM.style.display = "none";
      typeN.style.display = "block";
      typeO.style.display = "none";
      typeP.style.display = "none";
    } else if (categorySelectedId3 === 5) {
      typeL.style.display = "none";
      typeM.style.display = "none";
      typeN.style.display = "none";
      typeO.style.display = "block";
      typeP.style.display = "none";
    } else if (categorySelectedId3 === 6) {
      typeL.style.display = "none";
      typeM.style.display = "none";
      typeN.style.display = "none";
      typeO.style.display = "none";
      typeP.style.display = "block";
    }
  });
};

document.addEventListener("turbo:load", initializeCategorySelect);
