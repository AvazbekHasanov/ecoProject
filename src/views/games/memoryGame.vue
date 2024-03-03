<template>
  <div class="wrapper">
    <div class="card">
        <div class="grid-class">
            <div class="item" v-for="(item, index) in randomItem" :key="index"
            @click="clicedItem(item, index)">
                <div class="image"
                :class="aylansin(index)">
                <img :src="item.img" alt="img"></div>
            </div>
        </div>
        <div class="bottom">
            <div class="time"> Time: 30s</div>
            <div class="hr"></div>
            <div class="flips">Flips: 0</div>
            <div class="hr"></div>
            <button>Restart</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            rechoose: false,
            oneChoose: 0,
            twoChoose: 0,
            oneIndex: -1,
            twoIndex: -1,
            images:[
                {id: 1, img: './src/assets/images/car.png'},
                {id: 1, img: './src/assets/images/car.png'},
                {id: 2, img: './src/assets/images/diamond.png'},
                {id: 2, img: './src/assets/images/diamond.png'},
                {id: 3, img: './src/assets/images/diamondpink.png'},
                {id: 3, img: './src/assets/images/diamondpink.png'},
                {id: 4, img: './src/assets/images/diamondyello.png'},
                {id: 4, img: './src/assets/images/diamondyello.png'},
                {id: 5, img: './src/assets/images/hatchback.png'},
                {id: 5, img: './src/assets/images/hatchback.png'},
                {id: 6, img: './src/assets/images/viking.png'},
                {id: 6, img: './src/assets/images/viking.png'},
            ]
        }
    },

    watch: {
        count(newValue, oldValue){
            
        }
    },

    computed:{
        randomItem(){
        let sm = []
            if (this.images) {
            sm = this.images.sort((a, b) => 0.5 - Math.random())
            return sm;
            }
        },
    },
    methods:{
        clicedItem(item, index){
            if (this.oneChoose == 0) {
                this.oneChoose = item.id
            } else if(this.twoChoose == 0){
                this.twoChoose = item.id
            };

            if (this.oneIndex == -1) {
                this.oneIndex = index
            }else if(this.twoIndex == -1){
                this.twoIndex = index
            };
        },
        aylansin: function(index){
            let result = [];
            if ((index == this.twoIndex || index == this.oneIndex)) {
                result = ['rotate180']
                if (this.twoIndex != -1) {
                    this.rechoose = true
                }
                return result
            };
            setTimeout(()=>{
                if (this.rechoose) {
                    this.twoIndex = -1
                    this.oneIndex = -1
                    this.oneChoose = 0
                    this.twoChoose = 0
                    this.rechoose = false
                    result = []
                    return result
                }
            }, 3000)
        }
    }
}
</script>

<style scoped>
.item .image{
    transform: rotateY(90deg);
    transition: all 0.4s ease-in-out;
    
}
.rotate180{
    transform: rotateY(180deg) !important;
    transition: all 0.4s ease-in-out;
}
</style>