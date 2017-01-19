import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const LockDialog = ({ visible, save, hide, locked, title="", styles }) => {
  const text = locked ? "Odemknout" : "Zamknout"
  const confirmText = locked ? "odemknout" : "zamknout"
  return (
    <SettingsModal
      title={`${text} vklákno?`}
      visible={visible}
      hide={hide}
      save={save}
      saveText={text}
      width="small"
      styles={styles}
    >
      Opravdu chcete {confirmText} vlákno <strong>{title}</strong>?
    </SettingsModal>
  )
}

const css = {
  container: {},
  modal: {},
}

export default styles(css, LockDialog)
