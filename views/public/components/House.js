//exporting my installer house and import it in app.js
export default function installerHouse(app) {
  //template house is a simple card with different elements
  //the details.picturepath is the image of the house
  //then the title from details.title
  //then the category
  //then the short description

  //then the button for more information
  const templateHouse = `
    <div class="card" style="width: 18rem;">
        <img :src="details.picturePath" class="card-img-top" alt="Live preview">
        <div class="card-body">
            <h2 class="card-title">{{details.title}}</h2>
            <h5>{{details.category}}</h5>
            <p class="card-text">{{details.shortdesc}}</p>
            <p v-if="showFullDesc" class="card-text">{{details.fulldesc}}</p>
            
            <a
              v-if="!showFullDesc"
              class="btn btn-primary"
              @click="this.$emit('MoreInfo', details.idhouse)"
            >Get more info</a>
        </div>
    </div>
    `;

  //

  app.component("House", {
    props: ["details", "showFullDesc"],
    template: templateHouse,
  });
}
