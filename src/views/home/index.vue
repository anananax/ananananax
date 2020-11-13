<template>
    <div>
        <Header></Header>
        <Category></Category>
        <HeadLine></HeadLine>
        <Option></Option>
        <List></List>
    </div>
</template>

<script>
import Header from "./Head"
import Category from "./Category"
import HeadLine from "./HeadLine"
import Option from "./Option"
import List from "./List"
    export default {
        components:{
            Header,
            Category,
            HeadLine,
            Option,
            List
        }
        
        
    }
</script>

<style lang="scss" scoped>

</style>