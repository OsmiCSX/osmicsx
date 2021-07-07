import { types } from 'mobx-state-tree'

// Create Appearance Model
const AppearanceModel = types.model('Appearance', {
  theme: 'system'
})
.actions((appearance) => ({
  switch(theme: string) {
    appearance.theme = theme
  }
}))

export const appearanceHook = AppearanceModel.create()