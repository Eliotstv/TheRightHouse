//exporting installer houses to import in the app.js
export default function installerHouses(app) {
  //showing a title "Suggestions"
  //showing the top 3 houses with a slice function, to only see the top 3
  const templateHouses = `
  <h1>Suggestions</h1>
  <div class="Houses-div">
    <div v-for="houseDetails in houses.slice(0,3)">
        <House @MoreInfo="(value) => this.$emit('MoreInfo', value)" :details="houseDetails"></House>
    </div>
  </div>
`;
  //Houses is empty in the beginning
  app.component("Houses", {
    data() {
      return {
        houses: [],
      };
    },
    //with asynchronous method we will await the informations
    template: templateHouses,
    methods: {
      moreInfo(value) {
        this.$emit("MoreInfo", value);
      },
    },
    async mounted() {
      try {
        //we wait for the host (localhost or liveserver) + the route
        const housesJson = await fetch(host + "/api/houses");
        //we wait for the houses json + console log
        const houses = await housesJson.json();
        this.houses = houses;
        //after, a simple catch error
      } catch (err) {
        console.log(err);
      }
    },
  });
}
