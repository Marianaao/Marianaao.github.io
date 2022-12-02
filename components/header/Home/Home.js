import "../index.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/styles.css"/>
        <my-header username="andresrojassshere"> </my-header>
            <section class="main"> 
                <div class="container">
                    <div class="left_column">
                        <div class="histories_container">
                        <my-histories 
                            userpic="./images/histories/sofia_profile.png",
                            username="sofiacoppola"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/sofia_profile.png",
                            username="sofiacoppola"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/sofia_profile.png",
                            username="sofiacoppola"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/sofia_profile.png",
                            username="sofiacoppola"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/sofia_profile.png",
                            username="sofiacoppola"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/sofia_profile.png",
                            username="sofiacoppola"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/sofia_profile.png",
                            username="sofiacoppola"
                        > </my-histories>
                        <my-histories 
                            userpic="./images/histories/sofia_profile.png",
                            username="sofiacoppola"
                        > </my-histories>
                        </div>
                    </div>

                    <div class="right_column">
                        <p class="suggestions">Suggestions For You</p>
                        <my-suggestion  
                            suggestionusername = "estebanperez_07" 
                            suggestionfollowtoo="sophie_nyu and 12 others"
                            suggestionuserpic="./images/suggestions/profile1.png"
                        > </my-suggestion>
                        <my-suggestion  
                            suggestionusername = "estebanperez_07" 
                            suggestionfollowtoo="sophie_nyu and 12 others"
                            suggestionuserpic="./images/suggestions/profile1.png"
                        > </my-suggestion>
                        <my-suggestion  
                            suggestionusername = "estebanperez_07" 
                            suggestionfollowtoo="sophie_nyu and 12 others"
                            suggestionuserpic="./images/suggestions/profile1.png"
                        > </my-suggestion>
                        <my-suggestion  
                            suggestionusername = "estebanperez_07" 
                            suggestionfollowtoo="sophie_nyu and 12 others"
                            suggestionuserpic="./images/suggestions/profile1.png"
                        > </my-suggestion>
                        <my-suggestion  
                            suggestionusername = "estebanperez_07" 
                            suggestionfollowtoo="sophie_nyu and 12 others"
                            suggestionuserpic="./images/suggestions/profile1.png"
                        > </my-suggestion>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define("app-home", Home);
