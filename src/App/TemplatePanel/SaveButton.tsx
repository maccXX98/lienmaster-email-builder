import React, { useState } from 'react';

import { SaveOutlined } from '@mui/icons-material';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';

import { saveDocument, useSaveHandler } from '../../documents/editor/EditorContext';
import { useTranslation } from '../../i18n/useTranslation';

export default function SaveButton() {
  const { t } = useTranslation();
  const saveHandler = useSaveHandler();
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!saveHandler) {
      return;
    }

    setSaving(true);
    try {
      await saveDocument();
    } catch {
      // Failed to save document
    } finally {
      setSaving(false);
    }
  };

  return (
    <Tooltip title={t('common.save')} arrow>
      <IconButton
        color='primary'
        onClick={handleSave}
        disabled={saving || !saveHandler}
        aria-label={t('common.save')}
      >
        {saving ? <CircularProgress size={16} /> : <SaveOutlined fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}

