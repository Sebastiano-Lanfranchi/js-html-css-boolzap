new Vue({
  el: '#root',
  data: {
    indexContact: 0,
    userMessage: '',
    searchContact: '',
    contacts: [
     {
         name: 'Michele',
         avatar: 'img/avatar_1.jpg',
         visible: true,
         messages: [
             {
                 date: '10/01/2020 15:30:55',
                 text: 'Hai portato a spasso il cane?',
                 status: 'sent'
             },
             {
                 date: '10/01/2020 15:50:00',
                 text: 'Ricordati di dargli da mangiare',
                 status: 'sent'
             },
             {
                 date: '10/01/2020 16:15:22',
                 text: 'Tutto fatto!',
                 status: 'received'
             }
         ],
     },
     {
         name: 'Fabio',
         avatar: 'img/avatar_2.jpg',
         visible: true,
         messages: [
             {
                 date: '20/03/2020 16:30:00',
                 text: 'Ciao come stai?',
                 status: 'sent'
             },
             {
                 date: '20/03/2020 16:30:55',
                 text: 'Bene grazie! Stasera ci vediamo?',
                 status: 'received'
             },
             {
                 date: '20/03/2020 16:35:00',
                 text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                 status: 'sent'
             }
         ],
     },
     {
         name: 'Samuele',
         avatar: 'img/avatar_3.jpg',
         visible: true,
         messages: [
             {
                 date: '28/03/2020 10:10:40',
                 text: 'La Marianna va in campagna',
                 status: 'received'
             },
             {
                 date: '28/03/2020 10:20:10',
                 text: 'Sicuro di non aver sbagliato chat?',
                 status: 'sent'
             },
             {
                 date: '28/03/2020 16:15:22',
                 text: 'Ah scusa!',
                 status: 'received'
             }
         ],
     },
     {
         name: 'Luisa',
         avatar: 'img/avatar_6.jpg',
         visible: true,
         messages: [
             {
                 date: '10/01/2020 15:30:55',
                 text: 'Lo sai che ha aperto una nuova pizzeria?',
                 status: 'sent'
             },
             {
                 date: '10/01/2020 15:50:00',
                 text: 'Si, ma preferirei andare al cinema',
                 status: 'received'
             }
         ],
     },
 ],
  },
  methods: {
    chooser: function(index){
      this.indexContact = index;
    },
  sendMessage: function(){
    const newMessageObject = {
      date: '10/01/2015 15:50:00',
      text: this.userMessage,
      status: 'sent'
    }
    this.contacts[this.indexContact].messages.push(newMessageObject);
    this.userMessage = '';

    let that = this;
    setTimeout(function(){
      that.autoReply()
    },1000)
  },
  autoReply: function() {
    const reply = {
      date: '10/01/2015 15:50:00',
      text: 'OKK',
      status: 'received'
    }
    this.contacts[this.indexContact].messages.push(reply);
  },
  filteredList() {
    return this.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.searchContact.toLowerCase())
  })
}
  }
});




Vue.config.devtools = true;
