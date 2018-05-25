<template>
  <div class="app">
    <h1>{{ msg }} </h1>
      
    <h3>Score : {{ Board.points }}</h3>
      <div id="refr"><a href="javascript:document.location.href='app.vue'"><input type="button" value="Recommencer" ></a></div>
<br>
<table class="grid">
            <tr class="tile" v-for="(x, index) in Board.squares" :key="index" :index="index">
                <td class="line" v-for="(y, index) in x" :key="index" :index="index">
                    <div class="tile-container" v-if="y != 0"
                        v-bind:style="{backgroundColor: y === 2 || y === 4 ? '#FFC107' 
                            : y === 8 || y === 16 ? '#FF6F00' 
                            : y === 32 || y === 64 ? '#E65100' 
                            : y === 128 || y === 256 ? '#BF360C'
                            : y === 512 || y === 1024 ? '#5D4037'
                            : '#757575'}">
                        <span class="number">{{ y }}</span>
                    </div>
                </td>
            </tr>
        </table>
  </div>
</template>

<script>
import Board from '@/Board'

export default {
  name: 'app',
  created(){
  Board.init(4);
  window.addEventListener('keyup', this.direction);
  },
  data () {
    return {
      msg: 'Jouer a 2048',
      Board:Board
    }
  },
    methods: {
     direction: function (event) {
          let touchOk = [38,39,40,37]
          if(touchOk.includes(event.which)) {
            switch (event.which) {
              case 38:
                this.Board.move('left')
                break;
              case 37:
                this.Board.move('up')
                break;
              case 40:
                this.Board.move('right')
                break;
              case 39:
                this.Board.move('down')
                break;
            }
            this.$forceUpdate()
          }
     }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 , h3 {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table, td, th {
    border: 1px solid black;
    margin: auto;
}
td {
	height: 130px;
    width: 130px;
    text-align: center;
}
    #refr {
        text-align: center;
    }
    .tile-container {
    height: 130px;
    width: 130px;
    text-align: center;
    }
    .number {
        font-size: 70px;
    }
</style>