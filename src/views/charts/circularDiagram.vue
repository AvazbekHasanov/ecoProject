<template>
  <div class="t-wrapper">
    <!-- <circularinfo
    :titles="mtitles"
    ></circularinfo> -->
    <gradientChart
    :titles="mtitles">
    </gradientChart>
  </div>
</template>

<script>
import circularinfo from '@/components/circularDiagramComp.vue';
import gradientChart from '@/components/gradientChart.vue';
export default {
    components:{
        circularinfo,
        gradientChart,
    },
    data(){
        return{
            mtitles: ['tolib1','tolib2','tolib3','tolib4','tolib5','tolib6']
        }
    }
}
</script>

<style scoped>
.t-wrapper{
    min-height: 100vh;
    background-color: var(--baby-blue, #8AAAE5);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
</style>