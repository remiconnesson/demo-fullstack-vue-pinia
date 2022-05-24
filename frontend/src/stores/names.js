import { defineStore } from "pinia"
import api from "@/services/api"

export const useNameStore = defineStore('names', {
  state: () => {
    return {
      names: []
    }
  },
  actions: {
    async getAllNames() {
      this.names = await api.getAllNames();
    },
    async postNewName(newName) {
      await api.postNewName(newName)
      await this.getAllNames()
    }
  },
}
)

