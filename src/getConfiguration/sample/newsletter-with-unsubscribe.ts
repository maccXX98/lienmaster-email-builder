import { TEditorConfiguration } from '../../documents/editor/core';

const NEWSLETTER_WITH_UNSUBSCRIBE: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#F5F5F5',
      canvasColor: '#FFFFFF',
      textColor: '#262626',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'header-block',
        'greeting-block',
        'title-block',
        'content-block-1',
        'content-block-2',
        'cta-block',
        'divider-block',
        'footer-block',
      ],
    },
  },
  'header-block': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 32,
          bottom: 16,
          left: 24,
          right: 24,
        },
      },
      props: {
        url: null,
        alt: 'Logo',
        linkHref: null,
        contentAlignment: 'middle',
      },
    },
  },
  'greeting-block': {
    type: 'Text',
    data: {
      style: {
        fontWeight: 'normal',
        padding: {
          top: 16,
          bottom: 8,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Hi {{patientName}},',
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
        textAlign: 'left',
      },
      props: {
        text: 'Your Newsletter Title',
        level: 'h2',
      },
    },
  },
  'content-block-1': {
    type: 'Text',
    data: {
      style: {
        padding: {
          top: 8,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'We hope this message finds you well. Here are the latest updates, news, and exclusive offers we think you\'ll love.',
      },
    },
  },
  'content-block-2': {
    type: 'Text',
    data: {
      style: {
        padding: {
          top: 8,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Thank you for being part of our community. We look forward to keeping you informed!',
      },
    },
  },
  'cta-block': {
    type: 'Button',
    data: {
      style: {
        padding: {
          top: 16,
          bottom: 32,
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
        text: 'Read More',
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
          bottom: 8,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
        fontSize: 12,
        color: '#666666',
      },
      props: {
        text: 'You\'re receiving this email because you subscribed to our newsletter.',
      },
    },
  },
  'unsubscribe-line-block': {
    type: 'Text',
    data: {
      style: {
        padding: {
          top: 8,
          bottom: 8,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
        fontSize: 12,
        color: '#999999',
      },
      props: {
        text: 'If you no longer want to receive these emails,',
      },
    },
  },
  'unsubscribe-link-block': {
    type: 'Button',
    data: {
      style: {
        padding: {
          top: 8,
          bottom: 32,
          right: 24,
          left: 24,
        },
      },
      props: {
        buttonBackgroundColor: 'transparent',
        buttonStyle: 'rectangle',
        buttonTextColor: '#0068FF',
        fullWidth: false,
        size: 'small',
        text: 'Unsubscribe',
        url: '*|UNSUB|*',
      },
    },
  },
};

export default NEWSLETTER_WITH_UNSUBSCRIBE;
