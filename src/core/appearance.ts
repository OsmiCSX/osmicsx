import { types } from 'mobx-state-tree'

// Create Appearance Model
const AppearanceModel = types.model('Appearance', {
  theme: types.enumeration(['system', 'light', 'dark'])
})
.views(self => ({
  get activeTheme() {
    return self.theme
  }
}))
.actions(self => ({
  switch(theme: typeof self.theme) {
    self.theme = theme
  }
}))

export const appearanceHook = AppearanceModel.create({
  theme: 'system'
})