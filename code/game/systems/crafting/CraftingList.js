const CraftingList = [
  {
    id: 0,
  },
  {
    id: 1,
    name: "Stick",
    reqs: {
      "Wood": 2,
    },
    result: {"Stick": 2}
  },
  {
    id: 2,
    name: "Rope",
    reqs: {
      "Tall Grass": 2,
      "Leaves": 1,
    },
    result: {"Rope": 2}
  }
]

function getCraftingRecipe(id) {
  let recipe = CraftingList[id]
  if (Object.keys(recipe.reqs).length > 0) {
    for (let i = 0; i < Object.keys(recipe.reqs).length; i++) {
      console.log(`${Object.values(recipe.reqs)[i]} x ${Object.keys(recipe.reqs)[i]}`)
    }
  }
}

getCraftingRecipe(2)