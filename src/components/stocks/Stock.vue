<template>
  <div class="col-sm-8 col-md-5">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" :class="{denger: incufficientFunds}" v-model="quantity">
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="bayStock"
            :disabled="incufficientFunds || quantity <= 0 || Number.isInteger(quantity)"
          >{{incufficientFunds? 'Incufficient Funds' : 'Buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: null
    };
  },
  computed: {
    funds: function() {
      return this.$store.getters.funds;
    },
    incufficientFunds: function() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    bayStock: function() {
      let order = {
        stockID: this.stock.id,
        name: this.stock.name,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = null;
    }
  }
};
</script>

<style scoped>
  .denger {
    border: 1px solid red
  }
</style>