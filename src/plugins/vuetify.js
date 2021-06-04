import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
      },
      theme: {
        themes: {
            light: {
              primary: '#41B883'
            },
            dark: {
              primary: '#34495E',
              //anchor: '#fff'
            }
          }
      }
});
