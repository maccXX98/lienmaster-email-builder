# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-04-09

### Added
- **react-i18next integration**: Complete i18n rewrite using react-i18next for better maintainability and performance
- **LanguageSwitcher in navbar**: New language selector button in the editor navbar for easy language switching
- **Spanish translations**: Full Spanish (Español) language support added
- **New accessibility features**:
  - `role="alert"` and `aria-live="polite"` on Snackbar notifications
  - `aria-label` on ToggleButtonGroup for screen size selection
  - Full IconButton audit - all buttons now have proper aria-labels

### Changed
- **i18n architecture**: Refactored `initializeStore` to separate side effects from state management
- **Backward compatibility**: Maintained legacy i18n API (`t`, `getLanguage`, `setLanguage`) for existing integrations
- **Language persistence**: Now using localStorage to persist language preference

### Deprecated
- Legacy `t()`, `getLanguage()`, `setLanguage()` functions - use `useTranslation` hook from react-i18next instead

### Fixed
- Snackbar now has proper semantic role for screen readers
- ToggleButtonGroup now has proper aria-label for accessibility

## [1.2.3] - 2024-XX-XX

### Added
- Initial release notes structure
