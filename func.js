const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 0;
  formSteps[currentStep].classList.add("active");
  showCurrentStep();
}

multiStepForm.addEventListener("click", (e) => {
  if (e.target.matches("[data-next]")) {
    currentStep += 1;
  } else if (e.target.matches("[data-back]")) {
    currentStep -= 1;
  }
  showCurrentStep();
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
}

var personal_info = document.getElementById("personal-info");
var emergency_cont = document.getElementById("emergency-cont");
var refernce_person = document.getElementById("refernce-person");
var reasons_fr_vol = document.getElementById("reasons-fr-vol");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Next3 = document.getElementById("Next3");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Back3 = document.getElementById("Back3");

Next1.onclick = function () {
  progress.style.width = "450px";
};
Back1.onclick = function () {
  progress.style.width = "225px";
};

Next2.onclick = function () {
  progress.style.width = "675px";
};

Back2.onclick = function () {
  progress.style.width = "450px";
};

Next3.onclick = function () {
  progress.style.width = "1000px";
};

Back3.onclick = function () {
  progress.style.width = "675px";
};
