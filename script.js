const object = {
    data(){
        return {
        list:[],
        title:"",
        describe:""
        }
    },
    methods:{
        addTask(){
            if (this.title=="" || this.describe == ""){
                this.start = "active"
                setTimeout(()=>{
                this.start = ""
                },1000);
            }
            else{
                this.list.push({
                    title: this.title, 
                    describe:this.describe,
                    time: new Date().toLocaleString(),
                    done: true,
                    class: ""
                })
            }
            this.title = ""
            this.describe = ""
        },
        change(i){
            this.list.forEach((el, index) => {
                if (i==index){
                el.done = !el.done
                el.class = el.class == "" ? "bg" : ""
            }
            });
        }
    }
}
Vue.createApp(object).mount('.counter') 