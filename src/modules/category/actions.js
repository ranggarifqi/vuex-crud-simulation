export default {
  FETCH_DATA: ({ commit }) => {
    //Use `fetch` or `axios` to send API Request.
    //For Simulation, use setTimeout()
    setTimeout(()=>{
      const results = [
        {
          name: 'Komputer',
          parent: 0,
          is_active: 1
        },
        {
          name: 'Makanan',
          parent: 0,
          is_active: 1
        }
      ];
      commit('setDatas', results);
    }, 3000);
  }
}
