let myChart = document.getElementById("lineChart").getContext("2d");

let masspop = new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["boston", "california", "london", "barcelona"],
    datasets: [
      {
        label: "population",
        data: [45555, 85665, 34233, 45663],
        backgroundColor: ["#748", "#354", "#948", "#029"],
        broderWidth: 1,
        borderColor: "black",
        hoverBorderColor: "black",
        hoverBorderWidth: 3,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      },
    },
  },
});
