import React, { useState, useEffect } from 'react';

import { renderToStaticMarkup } from 'monto-email-core';

import { useDocument, useSelectedMainTab } from '../../documents/editor/EditorContext';

import HtmlEditor from '../../HtmlEditor';

export default function HtmlPanel() {
  const document = useDocument();
  const selectedMainTab = useSelectedMainTab();
  const [code, setCode] = useState<string>('');
  const [editedHtml, setEditedHtml] = useState<string>('');
  const [hasEdited, setHasEdited] = useState(false);

  // Render HTML when document changes
  useEffect(() => {
    try {
      const htmlCode = renderToStaticMarkup(document, { rootBlockId: 'root' });
      setCode(htmlCode);
      // Reset edited HTML when document changes
      setEditedHtml(htmlCode);
      setHasEdited(false);
    } catch (error) {
      setCode('<!-- Error rendering HTML -->');
      setEditedHtml('<!-- Error rendering HTML -->');
    }
  }, [document]);

  const handleHtmlChange = (newHtml: string) => {
    setEditedHtml(newHtml);
    setHasEdited(newHtml !== code);
  };

  // Warning when leaving HTML tab with unsaved changes
  useEffect(() => {
    if (hasEdited && selectedMainTab !== 'html') {
      const confirmLeave = window.confirm(
        '⚠️ Los cambios en HTML no se sincronizan con el editor visual.\n\n' +
        'Si cambias a otra pestaña, los cambios en HTML se perderán.\n\n' +
        '¿Quieres continuar de todos modos?'
      );
      if (!confirmLeave) {
        // User cancelled, stay on HTML tab - would need to force back but this is complex
        // For now, we just warn
      }
    }
  }, [selectedMainTab, hasEdited]);

  return (
    <HtmlEditor
      value={hasEdited ? editedHtml : code}
      onChange={handleHtmlChange}
      initialMode="split"
      showToolbar={true}
    />
  );
}
