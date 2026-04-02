import React from 'react';

import { UndoOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { undo, useCanUndo } from '../../../documents/editor/EditorContext';
import { useTranslation } from '../../../i18n/useTranslation';

export default function UndoButton() {
  const { t } = useTranslation();
  const canUndo = useCanUndo();

  return (
    <Tooltip title={t('common.undoTooltip')} arrow>
      <IconButton onClick={undo} disabled={!canUndo} size="small" aria-label={t('common.undoTooltip')}>
        <UndoOutlined fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}
