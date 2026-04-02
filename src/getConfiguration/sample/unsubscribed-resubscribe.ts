import { TEditorConfiguration } from '../../documents/editor/core';

const UNSUBSCRIBED_RESUBSCRIBE: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#F5F5F5',
      canvasColor: '#FFFFFF',
      textColor: '#262626',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'icon-block',
        'title-block',
        'message-block',
        'resubscribe-button-block',
        'divider-block',
        'footer-block',
      ],
    },
  },
  'icon-block': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 48,
          bottom: 24,
          left: 24,
          right: 24,
        },
      },
      props: {
        url: null,
        alt: 'Unsubscribed',
        linkHref: null,
        contentAlignment: 'middle',
      },
    },
  },
  'title-block': {
    type: 'Heading',
    data: {
      style: {
        padding: {
          top: 24,
          bottom: 16,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
      },
      props: {
        text: 'You\'ve Been Unsubscribed',
        level: 'h2',
      },
    },
  },
  'message-block': {
    type: 'Text',
    data: {
      style: {
        padding: {
          top: 8,
          bottom: 16,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
        color: '#666666',
      },
      props: {
        text: 'We\'re sorry to see you go. You have been successfully unsubscribed from our email communications.',
      },
    },
  },
  'resubscribe-button-block': {
    type: 'Button',
    data: {
      style: {
        padding: {
          top: 24,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        buttonBackgroundColor: '#0068FF',
        buttonStyle: 'rectangle',
        buttonTextColor: '#FFFFFF',
        fullWidth: false,
        size: 'medium',
        text: 'Subscribe Again',
        url: '',
      },
    },
  },
  'divider-block': {
    type: 'Divider',
    data: {
      style: {
        padding: {
          top: 16,
          bottom: 16,
          left: 24,
          right: 24,
        },
      },
      props: {
        lineHeight: 1,
        lineColor: '#E0E0E0',
      },
    },
  },
  'footer-block': {
    type: 'Text',
    data: {
      style: {
        padding: {
          top: 16,
          bottom: 48,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
        fontSize: 12,
        color: '#999999',
      },
      props: {
        text: 'Need help? Reply to this email or contact our support team.',
      },
    },
  },
};

export default UNSUBSCRIBED_RESUBSCRIBE;
