//exporting the Header
//This is the Header html with a responsive burger menu feature
//The 3th section of the html is the user click action tou change to the HouseManagement part
export default function installerHeader(app) {
  const templateHeader = `
  <div class="Header">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">The Right House</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"
            @click.prevent="changeMainSection('home')"
          >Home</a>
        </li>

        
       


        <li class="HouseManagement">
          <a class="nav-link active" aria-current="page" href="#"
            @click.prevent="changeMainSection('housemanagement')"
          >House Management</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
    `;

  app.component("Header", {
    template: templateHeader,
    methods: {
      changeMainSection(newSection) {
        this.$emit("ChangeView", newSection);
      },
    },
  });
}

//------ Like page for user
// <li class="likes">
//<a class="nav-link active" aria-current="page" href="#"
//@click.prevent="changeMainSection('likes')"
//>Likes</a>
//</li>
//-------------

// https://stackoverflow.com/a/40301449
// https://stackoverflow.com/a/45147591
