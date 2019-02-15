export default {
    chartData: state => state.consumptions ? Object.values(state.consumptions) : [0],
    chartPeople: state => state.consumptions ? Object.keys(state.consumptions) : ['Sem dados'],
    existConsumptions:
        state =>
            Object.keys(state.consumptions).length !== 0 &&
            Object.values(state.consumptions).reduce((acc, current) => acc + current) > 0,
    sortedPeople: state => Object.keys(state.consumptions).sort()
}