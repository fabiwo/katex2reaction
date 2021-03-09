import create from 'zustand'

const texStore = create((set) => ({
  texNode: 0,
  setTexNode: (node) =>
    set({
      texNode: node,
    }),
}))

export default texStore
