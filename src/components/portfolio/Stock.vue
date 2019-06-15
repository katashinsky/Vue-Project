<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price}} | Quantoty: {{stock.quantity}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="incufficientFunds || quantity <= 0 || Number.isInteger(quantity)"
          >{{incufficientFunds ? 'Not Enough' : 'Sell'}}</button>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: null
    };
  },
  computed: {
    incufficientFunds: function() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock: function() {
      const order = {
        stockID: this.stock.id,
        name: this.stock.name,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = null;
    }
  }
};
</script>