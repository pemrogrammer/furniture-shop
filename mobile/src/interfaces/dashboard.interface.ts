
export interface iDashboardScreen {
  navigation: any,
}

export interface iListData {
  id: string,
  title: string,
}

export interface iChartData {
  labels: Array<string>,
  datasets: Array<{
    data: Array<number>,
    strokeWidth: number
  }>
  // datasets: [
  //   {
  //     data: [20, 45, 28, 80],
  //     strokeWidth: 2, // optional
  //   },
  // ],
};
