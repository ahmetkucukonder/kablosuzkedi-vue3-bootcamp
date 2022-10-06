const app = Vue.createApp({
    data() {
        return {
            comments: [{
                    id: 0,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.',
                    likes: 4,
                    dislikes: 2
                },
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.',
                    likes: 0,
                    dislikes: 0
                },
                {
                    id: 2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.',
                    likes: 31,
                    dislikes: 69
                },
                {
                    id: 3,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.',
                    likes: 1,
                    dislikes: 28
                },
            ]
        };
    },
    methods: {
        likeComment(comment_item) {
            comment_item.likes++;
        },
        dislikeComment(comment_item) {
            comment_item.dislikes++;
        }
    }
}).mount("#app");
