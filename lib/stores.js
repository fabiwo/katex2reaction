import create from 'zustand'

const texStore = create((set) => ({
  texNode: {},
  setTexNode: (node) =>
    set({
      texNode: node,
    }),
}))

export default texStore
