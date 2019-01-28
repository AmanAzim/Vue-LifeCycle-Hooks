var vm1=new Vue({
    el:'#app',
    data:{
        title:'Vue Js life cycle',
    },
    beforeCreate:function(){
        console.log('beforeCreate()');
    },
    created: function (){
        console.log('Created()');
    },
    beforeMount:function () {
        console.log('beforeMount()');
    },
    mounted:function () {
        console.log('Mounted()');
    },
    beforeUpdate:function () {
        console.log('beforUpdate()');
    },
    updated:function () {
        console.log('updated()');
    },
    beforeDestroy:function () {
        console.log('beforeDestroy()');
    },
    destroyed:function () {
        console.log('destroyed()');
    },
    methods:{
        destroy:function () {
            this.$destroy();
        }
    }
});