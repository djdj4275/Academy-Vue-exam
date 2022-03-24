new Vue({
    el : "#app",
    data : {
        id : 0,
        title : "",
        memo : "",
        memolist : [],
        
        time : this.year,
    },
    methods : {
        addMemo : function() {
            this.memolist.push({id : this.id, memo : this.memo, title : this.title});
            this.id++;
            this.memo="";
            this.title="";
        },
        deleteMemo : function(id) {
            let index = 0;
            this.memolist.forEach((element,i) => {
                if (element.id == id) {
                    index = i;
                }
            });
            this.memolist.splice(index,1);
        }
    }
})