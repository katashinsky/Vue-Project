const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, { stockID, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id === stockID)
        if (record) {
            record.quantity += quantity
        } else {
            state.stocks.push({
                id: stockID,
                quantity: quantity,
                price: stockPrice
            })
        }
        state.funds -= stockPrice * quantity;

    },
    'SELL_STOCK'(state, { stockID, quantity, stockPrice }) {
        console.log('SELL_STOCK', { stockID, quantity, stockPrice })
        const record = state.stocks.find(element => element.id === stockID);
        if (record.quantity > quantity) record.quantity -= quantity
        else state.stocks.splice(state.stocks.indexOf(record), 1)

        state.funds += stockPrice * quantity;
    }
}

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order)
    },
    buyStock({ commit }, order) {
        commit('BUY_STOCK', order)
    }
}

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id);
            console.log('getters', stock)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state) {
        return state.funds
    }
}

export default {
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: state
}