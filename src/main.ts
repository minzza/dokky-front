import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret, faEye } from '@fortawesome/free-solid-svg-icons';

import { faComment, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { loadFonts } from './plugins/webfontloader';

library.add(faUserSecret, faEye, faComment, faThumbsUp);
loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
