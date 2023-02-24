const object = {
    data(){
        return {
        list:[],
        title:"",
        describe:"",
        start: ""
        }
    },
    methods:{
        addTask(){
            if (this.title=="" || this.describe == "") {
                this.start = "active"
                setTimeout(()=>{
                this.start = ""
                },1000);
            }
            else {
                this.list.push({
                    title: this.title, 
                    describe:this.describe,
                    time: new Date().toLocaleString(),
                    done: true,
                    class: "",
                    edit:true,
                    visible:true
                });
                this.title = ""
                this.describe = ""
            } 
        },
        change(i) {
            this.list.forEach((el, index) => {
                if (i == index){
                el.done = !el.done
                el.class = el.class == "" ? "bg" : ""
                }
            });
        }, 
        editSave(i){
            this.list.forEach((el, index)=>{
                if (i==index){
                    el.edit = !el.edit
                    el.visible = !el.visible
                    el.time = new Date().toLocaleString()
                }
            });
        },

        // del(i) {
        //     this.list.forEach((el, index) => {
        //         if (i == index) {
        //             this.list.splice(i,1)
        // //         }
        //     })
        // }
        del(i){
            this.list.splice(i, 1)
        }
    }
}
Vue.createApp(object).mount('.counter') 