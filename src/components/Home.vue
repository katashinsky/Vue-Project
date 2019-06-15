<template>
    <div>
        <h1>Trade or view ypur portfolio</h1>
        <hr>
        <h3>Funds: {{funds | currency}}</h3>
    </div>
</template>

<script>
export default {
    computed: {
        funds: function(){
            return this.$store.getters.funds
        }
    }
}
</script>