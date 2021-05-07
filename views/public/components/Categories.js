//this is my general export that i import in the app.js
export default function installerCategories(app) {
  //simple div with an input checkbox in pair
  //second part of the html, we only want the category and not the category + value =>{{categorypair[0]}}
  //span with a fake 2 seconds loader gif
  const templateCategories = `
<div class="Categories">
    <div v-for="categorypair in Object.entries(categories)" class="form-check">
    <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        v-model="categorypair[1]"
        v-on:click="adjustCategoryPreference(categorypair[0], !categorypair[1])"
    >
    <label class="form-check-label" for="flexCheckDefault">
        {{categorypair[0]}}
    </label>
    </div>
    <span v-if="currentlySaving"><img src="https://thumbs.gfycat.com/LimpingWavyCoqui-max-1mb.gif" class="loader"></span>
    <span v-if="couldNotSave">We could not reach the server, please reload...</span>
</div>
  `;
  //the app component for the categories returns the categories with their value: true / fale = checked / not checked
  app.component("Categories", {
    data() {
      return {
        categories: {
          large: true,
          garden: false,
          cosy: true,
        },
        currentlySaving: false,
        couldNotSave: false,
      };
    },
    methods: {
      // Note, upon calling this method the newValue is already calculated (cfr '!')
      adjustCategoryPreference(category, newValue) {
        try {
          this.currentlySaving = true;
          console.log("sending to server: ", category, newValue);
          setTimeout(() => (this.currentlySaving = false), 2000);
        } catch (err) {
          this.couldNotSave = true;
        }
      },

      async setValues() {
        const values = {
          idhouse: "3",
          shortdesc: "This is very nice",
          note: "This is a note",
          title: "NiceVeryNice",
          category: "Cosy",
          fulldesc: "This is very nice! This is very nice!",
        };
        //another try and catch
        //in the try action we will await a fetch from the API route (posthouse)
        try {
          const res = await fetch("/api/houses/postHouse", {
            body: JSON.stringify(values),
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      },
    },
    template: templateCategories,
  });
}
