import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import jeu from '@/components/jeu.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/leadboard',
            name:'leadboard',
            components: leadboard
        }
    ]
     
}) 
