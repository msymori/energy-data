var ctx = document.getElementById("myBar2Chart");
var myBar2Chart = new Chart(ctx, {
  //グラフの種類
  type: 'bar',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
      //データセット
      datasets: [
          {
              //凡例
              label: "1年目",
              //背景色
              backgroundColor: "rgba(179,181,198,0.2)",
              //枠線の色
              borderColor: "rgba(179,181,198,1)",
              //枠線の太さ
              borderWidth: 1,
              //背景色（ホバーしたときに）
              hoverBackgroundColor: "rgba(179,181,198,0.4)",
              //枠線の色（ホバーしたときに）
              hoverBorderColor: "rgba(179,181,198,1)",
              //グラフのデータ
              data: [12, 19, 3, 5, 2, 3]
          },
          {
              //凡例
              label: "2年目",
              //背景色
              backgroundColor: "rgba(255,99,132,0.2)",
              //枠線の色
              borderColor: "rgba(255,99,132,1)",
              //枠線の太さ
              borderWidth: 1,
              //背景色（ホバーしたときに）
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              //枠線の色（ホバーしたときに）
              hoverBorderColor: "rgba(255,99,132,1)",
              //グラフのデータ
              data: [15, 15, 6, 8, 5, 6]
          }
      ]
  },
  //オプションの設定
  options: {
      //軸の設定
      scales: {
          //縦軸の設定
          yAxes: [{
              //目盛りの設定
              ticks: {
                  //開始値を0にする
                  beginAtZero:true,
              }
          }]
      },
      //ホバーの設定
      hover: {
          //ホバー時の動作（single, label, dataset）
          mode: 'single'
      }
  }
});