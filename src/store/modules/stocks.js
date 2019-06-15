import { stocks } from '../../data/stocks';

let state = {
    stocks: []
}

let getters = {
    stocks: (state) => {
        console.log(state);
        return state.stocks
    }
}

let mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {
        console.log('Here')
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() + 0.5))
        });
    }
}

let actions = {
    buyStock: ({ commit }, order) => {
        console.log('in stock action')
    },

    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },

    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}