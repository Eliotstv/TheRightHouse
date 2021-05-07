class House {
  constructor(idhouse, shortdesc, note, title, fulldesc, picturePath) {
    this.idhouse = idhouse;
    this.shortdesc = shortdesc;
    this.note = note;
    this.title = title;
    this.fulldesc = fulldesc;
    this.picturePath = picturePath;
  }
}
//exporting the HouseManagement
//This is the html with directly an action to create a new house (the src link is the little "New" picture when we want to create a new house)
//The putHouse action is to crate a new house
export default function installerHouseManagement(app) {
  const templateHouseManagement = `
    <div class="mode">
    
    <div class="housesSelection">
      <a href="#" @click.prevent="currentHouse = {}; editMode = 'newHouse';">
        <img
          src="https://www.icone-png.com/png/22/22427.png"
          class="houseManagementSelection"
        />
      </a>
      <div v-for="houseDetails in houses"  >
        <a href="#" @click.prevent="currentHouse = houseDetails; editMode = 'editHouse';">
          <img :src="houseDetails.picturePath" class="houseManagementSelection" />
        </a>
      </div>
    </div>
      <div class="PutHouse" style="width: 18rem;">
        <h1>Create a new house here: </h1>
          <input v-model="currentHouse.title" placeholder="Give me the title of the house">
          <input v-model="currentHouse.shortdesc" placeholder="Give me a short description">
          <input v-model="currentHouse.fulldesc" placeholder="Give me the whole description">
          <input v-model="currentHouse.picturePath" placeholder="Give me the image link">
          <input v-model="currentHouse.note" placeholder="Give me a little note (invisible)">
          <button class="btn btn-primary" @click="submitValues" >Submit House</button>
          <button v-if="editMode === 'editHouse'" class="btn btn-danger" @click="deleteHouse()">Delete House</button>
        </div>
            <div class="Preview">
              <House :details="turnIntoHouse()"/>
            </div>
    </div>
      
      `;
  //Here we can see the two different modes (newHouse and editHouse)
  //There is also a catch error if it isn't an editmode
  app.component("HouseManagement", {
    template: templateHouseManagement,
    methods: {
      turnIntoHouse() {
        return this.currentHouse;
      },
      async submitValues() {
        try {
          let requestMethod;
          let apiUrl;
          if (this.editMode === "newHouse") {
            requestMethod = "PUT";
            apiUrl = "/api/houses/addHouse";
          } else if (this.editMode === "editHouse") {
            requestMethod = "POST";
            apiUrl = "/api/houses/updateHouse";
          } else {
            throw new Error("Unexpected editMode: " + this.editMode);
          }

          const res = await fetch(host + apiUrl, {
            body: JSON.stringify(this.turnIntoHouse()),
            method: requestMethod,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
          //Here we can see a house refreshing to see the results
          await this.refreshHouses();

          console.log(res);
          alert("You have added a new house");
        } catch (err) {
          console.log(err);
        }
      },
      //Here is the part to delete a house from the API and the host. The host in this case is the IP adress of the live server or localhost
      async deleteHouse() {
        const res = await fetch(host + "/api/houses/deleteHouse", {
          body: JSON.stringify({ id: this.currentHouse.idhouse }),
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        alert("You have deleted this house");

        await this.refreshHouses();
      },
      async refreshHouses() {
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
    },
    async mounted() {
      await this.refreshHouses();
    },
    //data are firstly null or filled with void to replace it with content
    data() {
      return {
        editMode: "newHouse",
        houses: [],
        currentHouse: {
          idhouse: null,
          shortdesc: null,
          note: null,
          title: null,
          fulldesc: null,
          picture: null,
        },
      };
    },
  });
}
// We could have used a global state of houses (this data is fetched in Houses too)
// However, globally transmitting values can get complex & the data might get stale (= out of date)
