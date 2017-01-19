import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const DeletePostDialog = ({ visible, save, hide, styles }) => {
  return (
    <SettingsModal
      title="Odstranění příspěvku"
      visible={visible}
      hide={hide}
      save={save}
      saveText="Smazat"
      width="small"
      styles={styles}
    >
     Opravdu chcete smazat tento příspěvek?
    </SettingsModal>
  )
}

const css = {
  container: {},
  modal: {},
}

export default styles(css, DeletePostDialog)
