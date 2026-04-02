import React from 'react';

import { AppRegistrationOutlined, LastPageOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { toggleInspectorDrawerOpen, useInspectorDrawerOpen } from '../../documents/editor/EditorContext';

export default function ToggleInspectorPanelButton() {
  const inspectorDrawerOpen = useInspectorDrawerOpen();

  const handleClick = () => {
    toggleInspectorDrawerOpen();
  };
  if (inspectorDrawerOpen) {
    return (
      <IconButton onClick={handleClick} aria-label="Close inspector panel">
        <LastPageOutlined fontSize="small" />
      </IconButton>
    );
  }
  return (
    <IconButton onClick={handleClick} aria-label="Open inspector panel">
      <AppRegistrationOutlined fontSize="small" />
    </IconButton>
  );
}
