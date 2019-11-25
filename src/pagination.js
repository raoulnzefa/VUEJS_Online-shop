
export default {
    // data() {
    //     return {
    //         posts: [],
    //         page: 1,
    //         perPage: 9,
    //         pages: []
    //     }
        
    // },
    // methods: {
    //     getPosts () {
    //         axios.get('/static/json.json')
    //             .then(response => {
    //                 this.posts = response.data['posts'];
    //             })
    //             .catch(e => {
    //               console.log(e)
    //             })
    //     },
    //     setPages () {
    //         let numberOfPages = Math.ceil(this.posts.length / this.perPage);
    //         for (let index = 1; index <= numberOfPages; index++) {
    //             this.pages.push(index);
    //         }
    //     },
    //     paginate (posts) {
    //         let page = this.page;
    //         let perPage = this.perPage;
    //         let from = (page * perPage) - perPage;
    //         let to = (page * perPage);
    //         return  posts.slice(from, to);
    //     },
    // },
    // computed: {
    //     displayedPosts () {
    //         return this.paginate(this.posts);
    //     }
    // },
    // watch: {
    //     posts () {
    //         this.setPages();
    //     }
    // },
    // created () {
    //     this.getPosts();
    // }
}
