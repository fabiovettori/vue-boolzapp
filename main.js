var app = new Vue({
    el: '#root',
    data: {
        user: [
            {
                name: 'Chris Valentine',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxsrRegxrV0qTWtfuHMYu9bG4q6FnvU9KdZw&usqp=CAU'
            }
        ],
        contacts: [
            {
                name: 'Sherin Clark',
                avatar: 'https://i.pinimg.com/originals/67/2d/83/672d83879a7e2da4e886c72db668c7ab.jpg',
                messages: [
                    {
                        message:'Hey Chris, how are you? Are you free tomorrow evening? I am gonna go to the Crazy Monkey for a drink, do you fancy to join with me and my friends. Ah! There will be Julie as well ;) &#129409',
                        time: '12.45 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'is it already friday really???! &#128565&#128565&#128565??',
                        time: '12.50 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScn-Ke1NKQYy4pv1Blu03G273sAkQwmZ7HkA&usqp=CAU">',
                        time: '12.45 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'I am not gonna survive this time, I am still drank of yestarday night, I went to Deansgade with Jamaes and Rodd.. I let you imagine &#128517&#128514&#128514.. anyway.. what time wanna pick you up at?.. you said Julie? &#128525&#128525',
                        time: '12.50 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'Yeah! Julie is coming back tonight from Mexico and she is gonna stay one week in Manchester.. you cannot do mistakes this time! &#128521. See you at 5 at Dam square',
                        time: '12.45 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'it sounds good, see you there! &#128536&#128536',
                        time: '12.50 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'&#128076 &#128076',
                        time: '12.45 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Simone Libert',
                avatar: 'https://images.squarespace-cdn.com/content/v1/5a402fd22aeba58d4a35a916/1579896591078-75WHVDVCE7XDKKABZCPH/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/Model-test-shoot-streetstyle-Paris-Fashion-Week-Haute-Couture-Fall-Winter-2019-2020-Alexis-Breugelmans-012.jpg?format=2500w',
                messages: [
                    {
                        message:'Hi Simone, how has it been going the the new diet plan &#129369 &#129382 &#129373?  are you been counting macros?',
                        time: '8.00 am',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'Hi Chris, the new diet it is super cool, are you at gym this evening for a quick check? &#128170&#128170&#128170',
                        time: '8.15 am',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'I would like to speak with you about some changes.. leg day was soooo heavy last time and I still feel pain at the legs&#128557&#128557&#128557!!',
                        time: '8.15 am',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'mmhh! really??.. but you looked feelling good..',
                        time: '8.00 am',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQo0bOMgEpwYwGv5ePxTIvgugWwVXaNjZWKfw&usqp=CAU">',
                        time: '8.15 am',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'&#128514&#128514',
                        time: '8.00 am',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'James Lagard',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsm7DTzpt7tKPCW8WlmuhmSQUpaP-2UpXyXQ&usqp=CAU',
                messages: [
                    {
                        message:'Hey bro, are you ok? where did you go yesterday at the end? Rodd and me were looking for you at the garden but we did not see you!',
                        time: '1.05 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'<img src="https://media.makeameme.org/created/where-the-fuck-8xqvs6.jpg">',
                        time: '1.05 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'We met two girls of Glasgow. oh gosh!..you should have heared their horrible accent!&#128518&#128518&#128518',
                        time: '1.12 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },

                    {
                        message:'Where I was? where were both of you!! I went to buy a drink and puff!! you disappeared? Fortunately I met Pet at the basament, muusic was amazing there!!',
                        time: '1.25 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'have a look, it was crowded..',
                        time: '1.25 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'<img src="https://clubbable.blob.core.windows.net/medias/H%C3%AF-Ibiza-Ibiza?timestamp=636665530352419686">',
                        time: '1.28 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'super cool!!&#128293&#128293&#128293',
                        time: '1.32 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Rodd Sheffard',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvAHuE6WKrX7Z66UoSpeKuwZ6qWvpfWrXj_A&usqp=CAU',
                messages: [
                    {
                        message:'Chris Could you borrow me the red shirt for tonight? the loundry has not finished yet so I do not have any to dress for tonight &#128548&#128548&#128548',
                        time: '2.56 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Have you called James? if is he late again tonight I am gonna leave him at home, promise&#129324&#129324&#129324!',
                        time: '3.00 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'hey bro no way I was thinking to dress that shirt for tonight, it is my prefer shirt and girls love it!&#128526&#128526',
                        time: '3.32 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'and.. how do you think it could fit for you, you are 2x bigger than me!!',
                        time: '3.33 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'<img src="https://media4.giphy.com/media/EvWx1BeeRyyJi/giphy.gif?cid=ecf05e47wsrtegoxnbug0vbusiqqm6ejfedvfutxb8rkx5v9&rid=giphy.gif">',
                        time: '3.52 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'are you serius&#128074&#128074?',
                        time: '3.52 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Why do not go to have a look in Gucci near Jefferson bridge? I saw beautiful shirts last sunday &#128084&#128084&#128076',
                        time: '3.55 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Sheron Trussard',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS721FIFQwL4eII-Ja0iJ4sPkNV9G529M6XUA&usqp=CAU',
                messages: [
                    {
                        message:'Hi Chris I have good news, a friend of mine has been selling french dog puppies and I immidiately think of you!',
                        time: '12.03 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'<img src="https://i2-prod.mirror.co.uk/incoming/article22171659.ece/ALTERNATES/s615/0_SWNS_RICH_LITTER_03.jpg">how are they cute!!&#128525&#128525&#129505&#129505&#129505',
                        time: '12.05 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'are you still interested in?',
                        time: '12.09 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'WOW really?&#129321&#129321&#129321 yes of course!! does she have a girl? do you know how much could it cost?',
                        time: '12.10 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'I finished to work on the new appartment in Oxford Street and the backyard has been waiting one of them..',
                        time: '12.11 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'Could you give me her phone? I wanna give her a ring immidiately!!',
                        time: '12.11 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'<img src="https://media0.giphy.com/media/ctztSfXmnguOpqtT3R/giphy.gif?cid=ecf05e47xcmqb0jcqetb7nnoqp04ttjjaq99dwjy67qguaiu&rid=giphy.gif">She is Holly 232-45645980',
                        time: '12.015 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'She said she wanna met me today at 6.. I am looking forward!!!',
                        time: '12.35 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'thanks a lot &#128591&#128591',
                        time: '12.35 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Pet Shen',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkPLvy24m6nxMQ5ldInNAku4M01oBqGI67-w&usqp=CAU',
                messages: [
                    {
                        message:'Hey genius, you forgot your bag at gym, I left it at the reception desk &#128517&#128517',
                        time: '7.22 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'thanks man!! i thought to have lost it!',
                        time: '07.48 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'Do you know? there was Mike today.. ahahahha have you ever seen him at the looker room! &#128514&#128514&#128514',
                        time: '07.50 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'<img src="https://media0.giphy.com/media/V1Z9lxeXHF2c8/giphy.gif?cid=ecf05e47quq7d2bwf3z1n05ajshpswli6gj2aumvgvwryys7&rid=giphy.gif">please god help him!!&#128591&#128591&#128591',
                        time: '07.55 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'&#128517&#128517.. who has not seen him!',
                        time: '08.22 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Luiss Bernard',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4T9LiA06jWem8b19Jx6p5JMgad8uJ7UmKzw&usqp=CAU',
                messages: [
                    {
                        message: 'Lu have you thought about my proposal? it will be amazing to go together &#128507&#127796&#128018&#127865',
                        time: '08.06 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'Yes man I checked the price for the flight &#128640on Aug and they are so cheap at the time being!!',
                        time: '08.12 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'<iframe width="560" height="315" src="https://www.youtube.com/embed/204O_xorrHk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                        time: '08.12 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Do you wanna meet up on thursday to make a travel plan? there are too many places to visit!! &#128517&#128517',
                        time: '08.33 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'<img src="https://media-cdn.tripadvisor.com/media/photo-s/17/70/d1/28/dinner-time.jpg">',
                        time: '08.33 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Have a look at this place, it is called La Brisa it is in the center of the island, amzing isnt it?&#129321&#129321&#129321',
                        time: '08.33 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'<img src="https://media2.giphy.com/media/kG11Td3QYNK5jjDLw4/giphy.gif?cid=ecf05e47b68d575b1fa80ad431a8477f4ec8edf6cc85b593&rid=giphy.gif">',
                        time: '08.33 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'&#128163&#128163 see you on thurday then!!',
                        time: '08.33 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Giulet Samoe',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR97U3VjDItAjlz7qYDmBuqk4kGY_dFcPRU7g&usqp=CAU',
                messages: [
                    {
                        message:'<img src="https://media3.giphy.com/media/26ybw55yGZPJVcrjG/200w.webp?cid=ecf05e47ddd5ca49869b2938a3719e933ed822075cfdc7b7&rid=200w.webp">Hey you!..',
                        time: '05.33 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Are you talking with me &#128540&#128540?',
                        time: '05.37 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'Yes stupid! when do come come to Liverpool again?',
                        time: '05.45 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:"it is Julie's birthdeay next saturady she is planning to have a party in her flat, why don't come with me? &#128538&#128538",
                        time: '06.12 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Are you sure? do you wanna make the same mistake twice?..&#128526&#128526',
                        time: '06.34 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:"mmhhh.. maybe.. was it a mistake?",
                        time: '06.38 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:"I was thinking we could go to the Cavern Club to drink a beer before to go to Julie..",
                        time: '06.38 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Amore Vitton',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuq60dv6-MObJsQQoxiJPIF0N2yMtwvyMq5w&usqp=CAU',
                messages: [
                    {
                        message:'I am waiting an answer Chris, I am sik and tired to wait you!',
                        time: '9.21 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Sorry but I has been sooo busy this week, I will give you a ring tomorrow morning ok?',
                        time: '09.55 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'&#128548&#128548 I do not wanna wait tomorrow morning!',
                        time: '9.21 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Juan Backer',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtNpB4AyF_v57IyaOyjY1OSqjC8fYwZUYI2g&usqp=CAU',
                messages: [
                    {
                        message:'Can you bring wine?',
                        time: '10.19 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'red or white?',
                        time: '10.27 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'Red and white! .. what a question!<img src="https://media3.giphy.com/media/Ib5LE7oy1eUdG87QeX/giphy.gif?cid=ecf05e47r7izsaju8a7mrsat12g1w9lm430yq3bg9j5ehze1&rid=giphy.gif">',
                        time: '10.31 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'We are on the rooftop, what time will be here at?',
                        time: '10.35 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'I am on my way but I need to go the mall before and today Oxford road is close.. mmhh!',
                        time: '10.55 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'I try to buy the wine at Arndale, I shoud be there at 7.30 too late?',
                        time: '10.55 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'<img src="https://media4.giphy.com/media/QVs6OmwbbGvWPJJ75m/giphy.gif?cid=ecf05e47a9o4b5iv6upkuni8hw3xqcc6944obag7nir8ru0z&rid=giphy.gif">',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'hurry up!!',
                        date: '13/11/2020',
                        status: 'received'
                    }

                ]
            }
        ],
        // array contenitore dei contatti filtrati dall'input di ricerca
        finder: [],
        // array contenitore dei contatti (può essere uguale a quello originale dei contatti oppure agli elementi trovati dal finder)
        variableContainer: [],
        // variabile globale che si aggiorna ogni qual volta viene cliccato su una preview (l'indice è generato dal ciclo v-for della chat), indica l'indice della conversazione cliccata tra le preview della chat
        indexConv: 0,
        // serve a leggere/resettare l'input dei messaggi da inviare in chat
        userNewMessage: '',
        // variabile di appoggio per eseguire lo switch dell'icona microfono con quella di invio messaggio
        command: 'fas fa-microphone',
        // variabile globale che va a leggere l'input inserito dall'utente nella barra di ricerca delle chat (all'inizio è vuoto)
        inputFilter: '',
        // variabile visibilità toggle menu
        dropToggle: '',
        check: -1,
        // controlli per l'eliminazione dei messaggi
        alertDelMessage: '',
        deleteMessCheck: false,
        checkDelBtn: false,
        index: 0,
        // variabile che regola il cambio di background dell'input di ricerca messaggi al focus dell'input
        checkInputFocus: '',
        checkNewMessageFocus: '',
        // controlli della posizione del dropdown dei messaggi (se la l'utlimo messaggio è troppo in basso il dropdown di apre verso l'alto)
        mousePosY: 0,
        dropDownPosition: 'null'
    },

    created: function(){
        // funzione che eseguo lo switch tra il contanitore dei contatti originale e quello filtrato rappresentato dall'array finder (funzione che deve caricare immediatamente)
        this.listGen();
    },

    mounted: function(){
        this.listGen();
    },

    methods: {
        // funzione che gestisce la visibilità dell'icona di scroll nelle chat
        scrollFunction: function(){
            // calcolo l'altezza dell'elmento (compreso della porzione scrollabile)
            const elementFullHeigth = this.$refs['chat-section'].offsetHeight;

            // sottraggo all'altezza totale (scrollabile) la porzione visibile
            const elementScrollTotY  = this.$refs['chat-section'].scrollHeight - elementFullHeigth;

            // calcolo i pixel scrollati in verticali dall'utente
            let userScrollY = this.$refs['chat-section'].scrollTop;

            // verifico la posizione attuale dello scroll, se si trova a piè contanitore l'icona svanisce altrimenti ricompare
            if (userScrollY < elementScrollTotY ) {
                this.$refs['scroll-button'].style.opacity = 1;
            } else if (userScrollY == elementScrollTotY){
                this.$refs['scroll-button'].style.opacity = 0;
            };
        },

        // funazione che al click sull'icona di scroll delle chat riporta a piè della conversazione (consentendo così di visualizzare l'ultima)
        scrollTotoBottom: function(){
            // calcolo l'altezza dell'elmento (compreso della porzione scrollabile)
            const elementFullHeigth = this.$refs['chat-section'].offsetHeight;

            // sottraggo all'altezza totale (scrollabile) la porzione visibile
            const elementScrollTotY  = this.$refs['chat-section'].scrollHeight - elementFullHeigth;

            this.$refs['chat-section'].scrollTo(0, elementScrollTotY);
            this.$refs['scroll-button'].style.opacity = 0;
        },
        // quando vengono generate le chat ad ogni contatto è associato un indice (assegnato dal ciclo v-for), al click della preview della conversazione la funzione registra l'indice corrispondente e lo va a salvare nella variabile globale indexConv
        conversation: function (i){
                this.indexConv = i;
        },

        // funzione che va a leggere il testo inserito dall'utente nell'input nuovo messaggio e lo va ad inserire tra le conversazioni del contatto con cui l'utente sta messaggiando
        userNewConv: function(indexConv){

            const date = new Date().toLocaleDateString();
            const time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}).toLowerCase();

            let userMes = {
                message: this.userNewMessage,
                time,
                date,
                status: 'sent'
            };
            this.contacts[this.indexConv].messages.push(userMes);
            this.scrollTotoBottom();

            // per il reset dell'input
            this.userNewMessage = '';

            // funzione di risposta automatica del contatto (avviene dopo 1s)
            setTimeout(() => {

                // generatore di risposta automatica
                let replay = ['See you later', 'Hurry up!', 'Are you kidding me?']
                let getRandomAnsware = Math.round((Math.random() * 2) + 0);

                let userMes = {
                    message: replay[getRandomAnsware],
                    time,
                    date,
                    status: 'received'
                };
            this.contacts[this.indexConv].messages.push(userMes);
            this.scrollTotoBottom();
            },1000);
        },

        // funzione che esegue lo switch tra l'icona microfono e l'icona invio dipendendmente se l'utente faccia click all'interno dell'input o fuori da esso.
        dinamicSwitch: function(){

            if (this.command == 'fas fa-microphone') {
                this.command = 'fas fa-play'
                this.checkNewMessageFocus = 'focus';
            } else {
                this.command = 'fas fa-microphone';
                this.checkNewMessageFocus = '';
            };
        },

        // funzione che va a filtrare la lista contatti confrontando l'input inserito dall'utente con le prime n lettere del contatto (dove n è la lunghezza della stringa inserita nell'input di ricerca)
        newFilterContacts: function(){
            this.finder = this.contacts.filter((contact) => {

                if (this.inputFilter.toLowerCase().slice(0,this.inputFilter.length) == contact.name.toLowerCase().slice(0,this.inputFilter.length)){
                    return true

                } else {
                    return false
                }
            }
        )},

        // funzione che eseguo lo switch tra il contanitore dei contatti originale e quello filtrato rappresentato dall'array finder (funzione che deve caricare immediatamente)
        listGen: function(){
            if (this.inputFilter.length > 0) {
                this.variableContainer = this.finder;

            } else {
                this.variableContainer = this.contacts;
            }
        },

        // funzione che regola la visibilità del dropdown menu dei messaggi
        toggleDropMenu: function(i){

            this.check = i;

            if (this.dropToggle == '') {

                // se l'utente si trova al di sotto del 70% dello schermo il menu si apre verso l'alto altrimenti verso il basso
                const changeSidePoint = window.innerHeight * 0.7;
                console.log(changeSidePoint + ' ' + '70%');

                if (this.mousePosY > changeSidePoint) {
                    this.dropDownPosition = 'above';

                } else {
                    this.dropDownPosition = 'null';
                }

                this.dropToggle = 'active';

            } else if (this.dropToggle == 'active'){
                this.dropToggle = '';
            };
        },

        // funzione che elimina il messaggio selezionato dall'utente
        deleteMessage: function(i) {

            this.alertDelMessage = 'active';

            this.index = i;
        },

        // funzione che regola la definitiva eliminazione del messaggio una volta premuto il pulsante delete del popup
        completeDeMess: function(){

            this.contacts[this.indexConv].messages.splice(this.index,1);
            this.alertDelMessage = '';
            this.checkDelBtn = false;
        },

        inputAnimation: function(){

            if (this.checkInputFocus == '') {
                this.checkInputFocus = 'active';
            } else {
                this.checkInputFocus = '';
            }
        },

        // funzione che determina la posizione del click (in verticale) all'interno dello spazio della chat (serve a capire sel il dropdown si deve aprire sopra o sotto il trigger) - lavora insieme alla funzione toggleDropMenu()
        getMousePosY: function (event) {
                this.mousePosY = event.screenY;
                console.log(this.mousePosY + ' ' + 'posizione cursore');
        }
    }
});
