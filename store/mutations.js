export default {
    addPerson: (state, val) => Vue.set(state.consumptions, val, 0),
    incrementConsumption: (state, val) => ++state.consumptions[val],
    decrementConsumption: (state, val) => state.consumptions[val] > 0 ? --state.consumptions[val] : state,
    removePerson: (state, val) => Vue.delete(state.consumptions, val),
    setBeerPrice: (state, val) => state.beerPrice = val,
    setCoverPrice: (state, val) => state.coverPrice = val,
    setServiceTipPercentage: (state, val) => state.serviceTipPercentage = val,
    setPersonName: (state, val) => state.personName= val,
    toggleAddModal: (state, val) => state.showAddModal = val,
    toggleCover: (state, val) => state.includeCover = val,
    toggleHelpModal: (state, val) => state.showHelpModal = val,
    toggleService: (state, val) => state.includeService = val
}