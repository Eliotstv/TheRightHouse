//exporting the fullhouse section and import in the app.js
export default function installerHouses(app) {
  //a fully loaded house will be displayed with the current index
  //a button right under to click to the next house (increment index +1)
  const templateHouses = `
  <div class="FullHouse">
        <House v-if="housesLoaded" :details="houses[currentHouseIndex]" :showFullDesc="true"></House>
        <div class="d-grid gap-2">
        <button class="btn btn-primary" style="width: 900px;" v-on:click="currentHouseIndex += 1" >View next house</button>
        </div>
  </div>
  `;
  //first houses[] is empty and is not loaded, with index 0
  app.component("FullHouseDescription", {
    data() {
      return {
        currentHouseIndex: 0,
        houses: [],
        housesLoaded: false,
      };
    },
    //with asynchronous method we will load from our host (live server / localhost) + the route /api/houses

    template: templateHouses,
    props: ["currentId"],
    async mounted() {
      try {
        const housesJson = await fetch(host + "/api/houses");
        //we wait for the houses json
        const houses = await housesJson.json();
        //and tell the programm that it will be loaded
        this.houses = houses;
        this.housesLoaded = true;
      } catch (err) {
        //simple catch error
        console.log(err);
      }
    },
    updated() {
      if (this.currentId) {
        this.houses.forEach((house, index) => {
          if (house.idhouse === this.currentId) this.currentHouseIndex = index;
        });
      }
    },
  });
}
