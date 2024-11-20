<template>
    <div>
    <input type="checkbox" id="todo-item" checked="false" />
    <label for="todo-item">您好,欢迎</label>
    </div>
</template>
<script>
    //导出当前组件对象
    export default {
        props: {
            label: { required:true, type:String},
            done: { default:false, type:Boolean}
        }
    };
</script>