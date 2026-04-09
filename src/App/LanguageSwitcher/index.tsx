import React from 'react';

import { LanguageOutlined } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';

import { changeLanguage, getLanguage, useTranslation } from '../../i18n';
import { setLanguage as setContextLanguage } from '../../documents/editor/EditorContext';
import type { Language } from '../../i18n';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const currentLang = getLanguage();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
    // Also update the editor context for components that use the old API
    setContextLanguage(lang);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ color: 'text.secondary' }}
        aria-label={t('common.language')}
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <LanguageOutlined fontSize="small" />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={() => handleLanguageChange('es')}
          selected={currentLang === 'es'}
          lang="es"
        >
          Español
        </MenuItem>
        <MenuItem
          onClick={() => handleLanguageChange('en')}
          selected={currentLang === 'en'}
          lang="en"
        >
          English
        </MenuItem>
      </Menu>
    </>
  );
}
