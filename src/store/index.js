import { createStore } from "vuex";
import { authModule } from "./authModule";
import { postModule } from "./postModule";
export default createStore({

  modules: {
    post: postModule,
    auth: authModule,
  }
})