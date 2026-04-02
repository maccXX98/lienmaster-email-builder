import React from 'react';

import { CodeOutlined, DataObjectOutlined, EditOutlined, PreviewOutlined } from '@mui/icons-material';
import { Tab, Tabs, Tooltip } from '@mui/material';

import { setSelectedMainTab, useSelectedMainTab, useShowJsonFeatures } from '../../documents/editor/EditorContext';
import { useTranslation } from '../../i18n/useTranslation';

export default function MainTabsGroup() {
  const { t } = useTranslation();
  const selectedMainTab = useSelectedMainTab();
  const showJsonFeatures = useShowJsonFeatures();
  const handleChange = (_: unknown, v: unknown) => {
    switch (v) {
      case 'json':
      case 'preview':
      case 'editor':
      case 'html':
        setSelectedMainTab(v);
        return;
      default:
        setSelectedMainTab('editor');
    }
  };

  return (
    <Tabs value={selectedMainTab} onChange={handleChange}>
      <Tab
        value="editor"
        aria-label={t('tabs.edit')}
        label={
          <Tooltip title={t('tabs.edit')} arrow>
            <EditOutlined fontSize="small" />
          </Tooltip>
        }
      />
      <Tab
        value="preview"
        aria-label={t('tabs.preview')}
        label={
          <Tooltip title={t('tabs.preview')} arrow>
            <PreviewOutlined fontSize="small" />
          </Tooltip>
        }
      />
      <Tab
        value="html"
        aria-label={t('tabs.htmlOutput')}
        label={
          <Tooltip title={t('tabs.htmlOutput')} arrow>
            <CodeOutlined fontSize="small" />
          </Tooltip>
        }
      />
      {showJsonFeatures && (
        <Tab
          value="json"
          aria-label={t('tabs.jsonOutput')}
          label={
            <Tooltip title={t('tabs.jsonOutput')} arrow>
              <DataObjectOutlined fontSize="small" />
            </Tooltip>
          }
        />
      )}
    </Tabs>
  );
}
