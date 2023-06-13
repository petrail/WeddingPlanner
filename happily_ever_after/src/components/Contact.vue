<template>
    <div class = "contactContainer"> 
        <div class="forma">
            <h2>KONTAKTIRAJTE NAS</h2>
            <p>Pošaljite nam poruku</p>
            <div class="ime">
                <input class="margin" type="text" placeholder="Ime" v-model="ime" required/>
                <input class="email" type="email" placeholder="theappangels@gmail.com" readonly value="theappangels@gmail.com"/>
            </div>
            <input type="text" placeholder="Tema" v-model="tema" required/>
            <textarea placeholder="Poruka" v-model="poruka" required/>
            <button @click="sendPoruka" :disabled="!formIsValid">POŠALJI PORUKU</button>
        </div>
        <div class="mapadiv">
            <iframe class="map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bulevar%20Nemanji%C4%87a%2015+(Happily%20Ever%20After)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowfullscreen></iframe>
        </div>
        <div v-if="showMessage" class="message">
            Email sent successfully!
        </div>

    </div>
    
  </template>
  
  <script>
  export default{
      name: "Contact",
      data() {
        return {
            ime: "",
            tema: "",
            poruka: "",
            showMessage: false
        };
    },
    computed: {
    formIsValid() {
      return this.ime && this.tema && this.poruka;
    },
  },
    mounted() {
        // Show the message for 5 seconds after page refresh
    },
    methods: {
        sendPoruka() {
        // Send the message if the form is valid
        if (this.formIsValid) {
            // Logic to send the message goes here
            setTimeout(() => {
             // Refresh the page after a 2-second delay
            (this.showMessage = true, 1000);
        });
            this.resetForm();
        }
        },
        resetForm() {
        // Reset the form after sending the message
        this.ime = "";
        this.tema = "";
        this.poruka = "";
        },
  
        refreshPage() {
            setTimeout(() => {
            location.reload(); // Refresh the page after a 2-second delay
            this.showMessage = true;
            }, 1000);
        }
    }
  };
  </script>
  
<style scoped>
    .contactContainer{
        width:100vw;
        padding:5vw;
        padding-top:2vw;
        display:flex;
        flex-wrap:wrap;
    }
    .forma{
        width:48%;
        display:flex;
        flex-direction: column;
        padding:2vw;
    }
    h2{
        font-weight: 600;
        text-transform:uppercase;
        font-size:max(2vw,16pt);
        margin-bottom:0;
    }
    p{
        margin:0;
    }
    .ime{
        display:flex;
        width:100%;
    }
    input,textarea{
        margin-top:2vh;
        border:2px solid var(--light-blue);
        border-radius:.5vw;
        padding:0.5vw;
    }
    textarea{
        resize:none;
        height:15vh;
    }
    button{
        border-radius:.5vw;
        width:30%;
        height:5vh;
        background-color: var(--light-blue);
        margin-top:2vh;
        border:0;
    }
    button:hover{
        background-color: var(--light-pink);
    }
    .margin{
        margin-right: 1vw;
    }
    .mapadiv{
        width:48%;
    }
    .map{
        width:100%;
        height: 100%;
        border:0;
        box-shadow: 15px 50px 21px rgba(0, 0, 0, 0.01), 9px 28px 18px rgba(0, 0, 0, 0.03), 4px 12px 13px rgba(0, 0, 0, 0.04), 1px 3px 7px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
        border-radius: 1vw;
    }
    .email{
        width: 50%;
    }
    @media (width<700px){
        .mapadiv, .forma{
            width:100%;
        }
        .map{
            height: 30vh;
        }
    }
    .message {
    background-color: rgb(110, 192, 110);
    color: white;
    padding: 5px;
    width: 45%;
    margin-left: 17px;
    text-align: center;
}
</style>
  