//importing each component
import installerCategories from "./components/Categories.js";
import installerHouse from "./components/House.js";
import installerHouses from "./components/Houses.js";
import installerFullHouseDescription from "./components/FullHouseDescription.js";
import installerHeader from "./components/Header.js";
import installerHouseManagement from "./components/HouseManagement.js";
//using the appTemplate to do a dynamic onepage
//First case:
const appTemplate = `
<div  v-if="mainsection === 'housemanagement'" class="HouseManagement">
  <Header @ChangeView="changeCurrentView" />
  <HouseManagement/>
</div>

<div v-else="mainsection === 'housesview'" class="Homescreen">
  <Header @ChangeView="changeCurrentView" />
  <Categories/>
  <Houses @MoreInfo="(newId) => this.currentFullHouseId = newId" />
  <FullHouseDescription :currentId="this.currentFullHouseId" />
</div>

`;
//using vue
const app = Vue.createApp({
  template: appTemplate,
  methods: {
    moreInfo(value) {
      console.log(value);
    },
    changeCurrentView(newView) {
      this.mainsection = newView;
    },
  },
  //a function that returns an object
  data() {
    return {
      currentFullHouseId: false,
      mainsection: "housemanagement",
    };
  },
});

// Ensure global value "host" is accessible across multiple modules
globalThis.host = "http://127.0.0.1:3000";

installerHouse(app);
installerHouses(app);
installerCategories(app);
installerFullHouseDescription(app);
installerHeader(app);
installerHouseManagement(app);

app.mount("#app");
