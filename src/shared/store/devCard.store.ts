import { StateCreator, create } from 'zustand'

interface Props {
  isShowing: boolean
  setIsShowing: (isShowing: boolean) => void
}

const state: StateCreator<Props> = set => ({
  isShowing: false,
  setIsShowing: (isShowing: boolean) => set(() => ({ isShowing }))
})

const useDevCardStore = create(state)

export default useDevCardStore
