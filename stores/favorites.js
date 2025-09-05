import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: {},
    favoritesArray: []
  }),
  actions: {
    setFavorites(favs) {
      this.favoritesArray = favs
      if (Array.isArray(favs)) {
        // преобразуем items в объект
        const mapped = {}
        favs.forEach(item => {
          if (item.product?.id) {
            mapped[item.product.id] = true
          }
        })
        this.favorites = mapped
      } else {
        this.favorites = {}
      }
    },
    toggle(productId) {
      if (this.favorites[productId]) {
        this.favorites[productId] = false
      } else {
        this.favorites[productId] = true
      }
    }
  }
})