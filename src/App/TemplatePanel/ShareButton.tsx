import React, { useState } from 'react';

import { IosShareOutlined } from '@mui/icons-material';
import { IconButton, Snackbar, Tooltip } from '@mui/material';

import { useDocument } from '../../documents/editor/EditorContext';
import { useTranslation } from '../../i18n';

export default function ShareButton() {
  const document = useDocument();
  const { t } = useTranslation();
  const [message, setMessage] = useState<string | null>(null);

  const onClick = async () => {
    const c = encodeURIComponent(JSON.stringify(document));
    location.hash = `#code/${btoa(c)}`;
    setMessage(t('common.shareSuccess'));
  };

  const onClose = () => {
    setMessage(null);
  };

  return (
    <>
      <IconButton onClick={onClick} aria-label={t('common.share')}>
        <Tooltip title={t('common.share')} arrow>
          <IosShareOutlined fontSize="small" />
        </Tooltip>
      </IconButton>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={message !== null}
        onClose={onClose}
        message={message}
        role="alert"
        aria-live="polite"
      />
    </>
  );
}
