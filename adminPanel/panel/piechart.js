let myChart = document.getElementById("pie").getContext("2d");

let masspie = new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: ["werner", "mount", "sterling", "lukaku"],
    datasets: [
      {
        label: "Assists",
        data: [35, 35, 53, 33],
        backgroundColor: ["#758", "#554", "#998", "#019"],
        borderolor: ["#758", "#554", "#998", "#019"],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
