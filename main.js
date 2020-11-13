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
                        message:'Hey how are you?',
                        time: '12.45 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'fine, thanks!',
                        time: '12.50 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Simone Libert',
                avatar: 'https://images.squarespace-cdn.com/content/v1/5a402fd22aeba58d4a35a916/1579896591078-75WHVDVCE7XDKKABZCPH/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/Model-test-shoot-streetstyle-Paris-Fashion-Week-Haute-Couture-Fall-Winter-2019-2020-Alexis-Breugelmans-012.jpg?format=2500w',
                messages: [
                    {
                        message:'How old are you?',
                        time: '8.00 am',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'fine, thanks!',
                        time: '8.15 am',
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
                        message:'Where do you live?',
                        time: '1.05 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Rome, and you?',
                        time: '1.25 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Rodd Sheffard',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvAHuE6WKrX7Z66UoSpeKuwZ6qWvpfWrXj_A&usqp=CAU',
                messages: [
                    {
                        message:'Hey how old are you?',
                        time: '3.00 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'30yo and you?',
                        time: '3.45 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'SheronTrussard',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS721FIFQwL4eII-Ja0iJ4sPkNV9G529M6XUA&usqp=CAU',
                messages: [
                    {
                        message:'Do you like travelling?',
                        time: '12.03 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'yes a lot!',
                        time: '12.24 pm',
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
                        message:'Do you like cats?',
                        time: '7.22 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'No, I prefer dogs!',
                        time: '07.48 pm',
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
                        message:'Please help me!',
                        time: '08.12 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Are you in trable?',
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
                        message:'Are you upset with me?',
                        time: '05.33 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'No why?',
                        time: '05.37 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Amore Vitton',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuq60dv6-MObJsQQoxiJPIF0N2yMtwvyMq5w&usqp=CAU',
                messages: [
                    {
                        message:'Do you speak english?',
                        time: '9.21 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'No I speak franch!',
                        time: '09.55 pm',
                        date: '13/11/2020',
                        status: 'sent'
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
                        message:'red or white?!',
                        time: '10.27 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    },
                    {
                        message:'white of course!!',
                        time: '10.19 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Do not forget the icecream please ;)',
                        time: '10.19 pm',
                        date: '13/11/2020',
                        status: 'received'
                    },
                    {
                        message:'Impossibile',
                        time: '10.22 pm',
                        date: '13/11/2020',
                        status: 'sent'
                    }
                ]
            }
        ],
        lastMessageIndex: 0,
        indexConv: 0,
        userNewMessage: '',
    },
    methods: {
        lastMessage: function(i){
             this.lastMessageIndex = this.contacts[i].messages.length - 1;
             console.log(this.lastMessageIndex);
        },
        conversation: function (i){
            // la funzione deve andare a leggere l'indice del contatto selezionato
            this.indexConv = i;
        },
        userNewConv: function(indexConv){

            let userMes = {
                message: this.userNewMessage,
                time: '14.00 pm',
                date: '14/11/2020',
                status: 'sent'
            };
            this.contacts[this.indexConv].messages.push(userMes);

            this.userNewMessage = '';

            let answare = setTimeout(() => {
                let userMes = {
                    message: 'OK',
                    time: '14.00 pm',
                    date: '14/11/2020',
                    status: 'received'
                };
                // console.log(userMess);
                // console.log(this.indexConv);
            this.contacts[this.indexConv].messages.push(userMes);
            },1000);

            answare();
        },
        dinamicSwitch: function(){
            let imput = document.querySelector('#test');
            // console.log(input);
        }
    }
});

//

// let test = [
//     {
//         name: 'ab',
//         message: 'no'
//     },
//     {
//         name: 'received',
//         message: 'no'
//     },
//     {
//         name: 'received',
//         message: 'no'
//     },
// ];
//
// let array = [];
// for (var i = 0; i < test.length; i++) {
//     if (test[i].name.includes('received')) {
//         array.push(i);
//     }
// }
//
// console.log(array.slice(-1).join());
