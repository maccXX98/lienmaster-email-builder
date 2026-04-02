import React from 'react';

import { RedoOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { redo, useCanRedo } from '../../../documents/editor/EditorContext';
import { useTranslation } from '../../../i18n/useTranslation';

export default function RedoButton() {
  const { t } = useTranslation();
  const canRedo = useCanRedo();

  return (
    <Tooltip title={t('common.redoTooltip')} arrow>
      <IconButton onClick={redo} disabled={!canRedo} size="small" aria-label={t('common.redoTooltip')}>
        <RedoOutlined fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}
