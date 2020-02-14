export  const state = () =>({
    currentMovie : {},
    favMoviesList : [ ]
} )

export const getters = {
    getFavMoviesList: state => {
      return state.favMoviesList
    }
  }

export const mutations = {
    tempStoreMovie(state, data){
        state.currentMovie=data
    },
    removeFromFavs(state, payload){
        state.favMoviesList.forEach((item, index)=> {
            if(item.imdbID === payload.imdbID){
                state.favMoviesList.splice(index,1)
            }
        })
    },
  addToFavs(state, payload) {
        state.favMoviesList.push(payload)
    }
}

export const actions = {
    storeMovie({commit}, data){
        commit('tempStoreMovie', data)
    },
  addToFavorites({ commit }, data) {
        commit('addToFavs', data)
    },
    removeFromFavorites({commit}, data){
        commit('removeFromFavs', data)
    },
    async fetchSingleMovie({commit}, payload){
        let res = await this.$axios.get(`http://www.omdbapi.com/?apikey=dd5fbf0a&i=${payload.omdbID}`)
        commit('tempStoreMovie', res.data)
    }


    
}
