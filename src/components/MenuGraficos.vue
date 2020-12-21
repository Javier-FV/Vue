
<template>
  <div id="Resumen">
    <b-navbar toggleable="md" type="dark" variant="danger"> 
     </b-navbar> 
      <table id = a style="width:100%" >
      <tr>
        <th> <AreaChart/></th>
        
       </tr>
      <tr>
        <th> <PieChart/></th>
       </tr>
      <tr>
        <th><BarChart/></th>
       </tr>
      <tr>  
        <th> <RadarChart/></th>
      </tr>
      <tr>
        <th><LineChart/></th>   
      </tr>
      </table> 
  </div>
</template>
<script>
import AreaChart from "./AreaChart.vue";
import PieChart from "./PieChart.vue";
import BarChart from "./BarChart.vue";
import RadarChart from "./RadarChart.vue";
import LineChart from "./LineChart.vue"

export default {
  name: "Resumen",

  components: {
    AreaChart,
    PieChart,
    BarChart,
    RadarChart,
    LineChart
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 60000,
        Newspapers: 10
      }
    };
  }
};
</script>
<style>
.Resumen {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #94a729;
  margin-top: 60px;
}
#a {
  border-spacing: 90px;
  border: 1px solid black;
}
</style>
