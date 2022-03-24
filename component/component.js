Vue.component('memocomponent',{
    props : ['id','title'],
    template : 
    `<div>
        <h3>
            {{title}}
            <button @click="deletememo">X</button>
        </h3>
        <slot></slot>
        <p>{{time}}</p>
    </div>`,
    data : function() {
        return {
            date : new Date(),
            time : `${year}년${month}월${day}일`
        }
    },
    methods : {
        deletememo : function() {
            this.$emit("delete",this.id);
        },
    }
})