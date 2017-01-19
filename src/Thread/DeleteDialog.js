import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const DeleteDialog = ({ visible, save, hide, title="", styles }) => {
  return (
    <SettingsModal
      title="Odstranění vlákna"
      visible={visible}
      hide={hide}
      save={save}
      saveText="Smazat"
      width="small"
      styles={styles}
    >
      Opravdu chcete smazat toto vlákno <strong>{title}</strong>?
    </SettingsModal>
  )
}


const css = {
  container: {},
  modal: {},
}

export default styles(css, DeleteDialog)
