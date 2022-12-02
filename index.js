import "./components/PostList/PostList.js";
import "./components/Form/Form.js";
import "./components/index.js";
import DB from "./services/db.js";
class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    async connectedCallback() {
        DB.listenPosts((posts) => this.render(posts));
    }
    render(posts) {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `

      
      <link rel="stylesheet" href="./components/styles.css"/>

      <my-header username="MarianaOcampo"> </my-header>

      <section class="main"> 
      <div class="container">
          <div class="left_column">
              <div class="histories_container">
                  <my-histories 
                      userpic="./images/histories/Xavier_profile.png",
                      username="XAVIERThorpe"
                  > </my-histories>
                  <my-histories 
                      userpic="./images/histories/merlina_profile.png",
                      username="666Addams"
                  > </my-histories>
                  <my-histories 
                    userpic="./images/histories/Xavier_profile.png",
                      username="XAVIERThorpe"
                  > </my-histories>
                  <my-histories 
                  userpic="./images/histories/merlina_profile.png",
                  username="666Addams"
                  > </my-histories>
                  <my-histories 
                  userpic="./images/histories/Xavier_profile.png",
                  username="XAVIERThorpe"
                  > </my-histories>
                  <my-histories 
                  userpic="./images/histories/merlina_profile.png",
                  username="666Addams"
                  > </my-histories>
                  <my-histories 
                  userpic="./images/histories/Xavier_profile.png",
                  username="XAVIERThorpe"
                  > </my-histories>
                  <my-histories 
                  userpic="./images/histories/merlina_profile.png",
                  username="666Addams"
                  > </my-histories>
              </div>
               
              <div>
                <app-form></app-form> 
              </div>

              <dic>
              <app-post-list posts='${JSON.stringify(posts)}'></app-post-list> 
              </dic>

              
              
          </div>

          <div class="right_column">
              <p class="suggestions">Suggestions For You</p>
              <my-suggestion  
                  suggestionusername = "bianca_07" 
                  suggestionfollowtoo="juandavid_g and 12 others"
                  suggestionuserpic="./images/suggestions/profile1.png"
              > </my-suggestion>
              <my-suggestion  
                  suggestionusername = "EnidPink" 
                  suggestionfollowtoo="juandavid_g and 12 others"
                  suggestionuserpic="./images/suggestions/profile2.png"
              > </my-suggestion>
              <my-suggestion  
              suggestionusername = "bianca_07" 
              suggestionfollowtoo="juandavid_g and 12 others"
              suggestionuserpic="./images/suggestions/profile1.png"
              > </my-suggestion>
              <my-suggestion  
              suggestionusername = "EnidPink" 
              suggestionfollowtoo="juandavid_g and 12 others"
              suggestionuserpic="./images/suggestions/profile2.png"
              > </my-suggestion>
              <my-suggestion  
              suggestionusername = "bianca_07" 
              suggestionfollowtoo="juandavid_g and 12 others"
              suggestionuserpic="./images/suggestions/profile1.png"
              > </my-suggestion>
          </div>
      </div>
  </section>
      









      
      
      </section>
      `;
        }
    }
}
customElements.define("app-container", App);
