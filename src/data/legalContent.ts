export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const legalDocs: Record<string, LegalDoc> = {
  'privacy-policy': {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    updated: 'October 2026',
    intro:
      'Shasti Profits respects your privacy. This policy explains what information we collect when you use our website or contact us, how we use it, and the choices you have.',
    sections: [
      {
        heading: 'Information We Collect',
        paragraphs: ['We collect only what you choose to share with us, such as:'],
        bullets: [
          'Your name, mobile number and email address when you use our contact form, call us or message us on WhatsApp.',
          'The contents of your message or enquiry.',
          'Basic technical data such as browser type, device and pages visited, through standard website logs or analytics tools.',
        ],
      },
      {
        heading: 'How We Use Your Information',
        bullets: [
          'To reply to your enquiries about our educational content.',
          'To share updates about our educational resources, where you have asked us to.',
          'To improve our website and content.',
          'To meet legal or regulatory obligations.',
        ],
      },
      {
        heading: 'WhatsApp and Third-Party Services',
        paragraphs: [
          'Our contact form opens WhatsApp with your message pre-filled. Once you send it, the message is handled under WhatsApp’s own terms and privacy policy. Our website also embeds Google Maps, which is subject to Google’s privacy policy.',
        ],
      },
      {
        heading: 'Sharing of Information',
        paragraphs: [
          'We do not sell or rent your personal information. We may share it only with service providers who help us run our website and communications, or when required by law.',
        ],
      },
      {
        heading: 'Data Retention and Security',
        paragraphs: [
          'We keep your information only as long as needed for the purposes above. We take reasonable steps to protect it, but no method of storage or transmission over the internet is completely secure.',
        ],
      },
      {
        heading: 'Your Rights',
        paragraphs: [
          'Under applicable Indian data protection law, including the Digital Personal Data Protection Act, 2023, you may ask us to access, correct or delete the personal information we hold about you, or withdraw your consent to its use. Contact us using the details below.',
        ],
      },
      {
        heading: 'Children',
        paragraphs: [
          'Our content is intended for adults aged 18 and above. We do not knowingly collect information from minors.',
        ],
      },
      {
        heading: 'Changes to This Policy',
        paragraphs: ['We may update this policy from time to time. The latest version will always be available on this page.'],
      },
    ],
  },

  'terms-of-service': {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    updated: 'October 2026',
    intro:
      'By accessing this website or using our educational resources, you agree to these terms. Please read them carefully.',
    sections: [
      {
        heading: 'About Our Services',
        paragraphs: [
          'Shasti Profits is a financial education platform. We explain concepts relating to the Indian stock market, including technical analysis, price action, institutional methodology, futures and options, and risk management.',
        ],
      },
      {
        heading: 'Eligibility',
        paragraphs: ['You must be at least 18 years old and legally able to enter into a contract to use our services.'],
      },
      {
        heading: 'Educational Purpose Only',
        paragraphs: [
          'All content is for general educational and informational purposes only. It is not investment advice, financial advice, a research recommendation, or a recommendation to buy, sell or hold any security or financial instrument.',
        ],
      },
      {
        heading: 'No Guaranteed Returns',
        paragraphs: [
          'We make no guarantee of profits, returns or future performance. Past performance does not guarantee future results.',
        ],
      },
      {
        heading: 'No Professional Relationship',
        paragraphs: [
          'Accessing our website or content does not create an adviser-client or any other professional relationship with Shasti Profits. Shasti Profits is not registered with SEBI as an Investment Adviser or Research Analyst.',
        ],
      },
      {
        heading: 'Your Responsibilities',
        bullets: [
          'Provide accurate information when you contact us.',
          'Use our content for your own personal learning only.',
          'Do not copy, record, resell or distribute our content without written permission.',
          'Do not misuse the website or try to disrupt it.',
          'Make your own financial decisions and take responsibility for them.',
        ],
      },
      {
        heading: 'Intellectual Property',
        paragraphs: [
          'The text, logos, graphics and other material on this website and in our educational content belong to Shasti Profits and may not be reused without permission.',
        ],
      },
      {
        heading: 'Accuracy of Information',
        paragraphs: [
          'We take reasonable care in preparing our content, but we do not warrant that it is complete, accurate or current. Market conditions and related information may change without notice.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by law, Shasti Profits is not liable for any loss or damage, including trading or investment losses, arising from your use of our website or content.',
        ],
      },
      {
        heading: 'Third-Party Links',
        paragraphs: ['Our website may link to third-party sites. We are not responsible for their content or practices.'],
      },
      {
        heading: 'Changes to These Terms',
        paragraphs: ['We may revise these terms at any time. Continued use of our website means you accept the updated terms.'],
      },
      {
        heading: 'Governing Law',
        paragraphs: [
          'These terms are governed by the laws of India. Any dispute is subject to the courts at Karur, Tamil Nadu.',
        ],
      },
    ],
  },

  disclaimer: {
    slug: 'disclaimer',
    title: 'Risk Disclaimer',
    updated: 'October 2026',
    intro:
      'Shasti Profits – Financial Education & Market Awareness. The information provided on the Shasti Profits website, social media platforms and associated educational channels is intended solely for general educational and informational purposes.',
    sections: [
      {
        heading: 'Scope of Our Content',
        paragraphs: [
          'Shasti Profits aims to provide educational content relating to the Indian financial markets, including stock market fundamentals, technical analysis concepts, market trends, derivatives, futures and options, and risk management principles.',
        ],
      },
      {
        heading: 'No Investment Advice',
        paragraphs: [
          'The content provided is not intended to constitute investment advice, financial advice, research recommendations, or a recommendation to buy, sell, or hold any security or financial instrument.',
        ],
      },
      {
        heading: 'No Guaranteed Returns',
        paragraphs: [
          'Financial markets are subject to market volatility and uncertainty. Shasti Profits makes no guarantee of profits, returns, accuracy, or future performance from the use of its educational content.',
        ],
      },
      {
        heading: 'Market Risk',
        paragraphs: [
          'Investments and derivatives, particularly futures and options, involve significant financial risk and may result in substantial losses. Participants should understand the risks involved before making any financial decisions.',
        ],
      },
      {
        heading: 'Independent Decisions',
        paragraphs: [
          'All information should be evaluated independently. Individuals are responsible for their own financial decisions and should consider their financial circumstances, knowledge, and risk tolerance before participating in the financial markets.',
        ],
      },
      {
        heading: 'Accuracy of Information',
        paragraphs: [
          'Although reasonable care may be taken in preparing educational content, Shasti Profits does not warrant that all information is complete, accurate, or current. Market conditions and related information may change without notice.',
        ],
      },
      {
        heading: 'No Professional Relationship',
        paragraphs: [
          'Accessing this website or its content does not, by itself, establish an adviser-client relationship or any other professional relationship with Shasti Profits.',
        ],
      },
      {
        heading: 'Regulatory Status',
        paragraphs: [
          'Shasti Profits is not registered with SEBI as an Investment Adviser or Research Analyst. The educational content provided should not be interpreted as a substitute for services requiring registration under applicable securities laws.',
        ],
      },
      {
        heading: 'Acknowledgement',
        paragraphs: [
          'By accessing this website or using its educational resources, you acknowledge that you understand and accept the risks associated with financial markets.',
          'For educational purposes only. Learn responsibly. Understand the risks before making financial decisions.',
        ],
      },
    ],
  },

  'payment-refund-policy': {
    slug: 'payment-refund-policy',
    title: 'Payment & Refund Policy',
    updated: 'October 2026',
    intro:
      'This policy explains how payments for Shasti Profits educational resources are made and when a refund may be considered.',
    sections: [
      {
        heading: 'Fees and Payments',
        bullets: [
          'The fee for any educational programme or resource is shared with you before you enrol or pay.',
          'Payments can be made through [UPI / bank transfer / other methods you accept].',
          'You will receive a confirmation once your payment is received.',
          'Fees are for educational access only. They do not buy investment advice, tips or guaranteed results.',
        ],
      },
      {
        heading: 'When a Refund May Be Considered',
        bullets: [
          'A duplicate or incorrect payment was made.',
          'We cancel a programme or batch before it starts.',
          '[Add any other case, for example a request made within X days of payment and before any content is accessed.]',
        ],
      },
      {
        heading: 'When a Refund Is Not Available',
        bullets: [
          'Change of mind after the programme has started or content has been accessed.',
          'Dissatisfaction with market outcomes or trading results, since we do not guarantee profits or returns.',
          'Sessions already attended or material already shared.',
        ],
      },
      {
        heading: 'How to Request a Refund',
        paragraphs: [
          'Message us on WhatsApp or email us with your name, registered mobile number, payment date and amount. Approved refunds are returned to the original payment method within [7 to 10] working days.',
        ],
      },
    ],
  },

  'cancellation-policy': {
    slug: 'cancellation-policy',
    title: 'Cancellation Policy',
    updated: 'October 2026',
    intro: 'This policy explains how an enrolment can be cancelled by you or by Shasti Profits.',
    sections: [
      {
        heading: 'Cancellation by You',
        paragraphs: [
          'You can request cancellation by messaging us on WhatsApp or emailing us with your name and registered mobile number. Requests made [at least X days] before the programme starts are reviewed under our Payment & Refund Policy.',
        ],
      },
      {
        heading: 'Cancellation by Shasti Profits',
        paragraphs: [
          'We may cancel or reschedule a session or batch due to low enrolment, trainer unavailability or other unavoidable reasons. In that case you can choose a new date or a refund for the cancelled portion.',
        ],
      },
      {
        heading: 'Termination for Misuse',
        paragraphs: [
          'We may end your access without a refund if our content is copied, recorded, shared or resold, or if our Terms of Service are otherwise breached.',
        ],
      },
      {
        heading: 'Rescheduling',
        paragraphs: ['Where possible, you can move to a later batch. Please contact us in advance to arrange this.'],
      },
    ],
  },
};