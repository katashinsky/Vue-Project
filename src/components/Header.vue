<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Stock Traden</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link to="/portfolio" activeClass="active" tag="li">
              <a>Portfolio</a>
            </router-link>
            <router-link to="/stocks" activeClass="active" tag="li">
              <a>Stocks</a>
            </router-link>
          </ul>
          <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#" @click="endDay">End Day</a>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds: function() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay: function() {
      this.randomizeStocks()
    }
  }
};
</script>