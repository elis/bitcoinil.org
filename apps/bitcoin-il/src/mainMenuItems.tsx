import * as React from 'react'
import BusinessBody from './BusinessesBody'
import GettingStartedBody from './GettingStartedBody'
import HowItWorks from './HowItWorks'
import IndividualsBody from './IndividualsBody'
import InnovationBody from './InnovationBody'
import { MainMenuItem } from './Interfaces'
import RoutePage from './RoutePage'
import SupportBody from './SupportBody'
import { FormattedMessage } from 'react-intl'

export const mainMenuItems: MainMenuItem[] = [
  {
    label: (
      <FormattedMessage
        id={`mainMenu.intro.label`}
        defaultMessage={'Introduction'}
        description={`mainMenu item intro`}
      />
    ),
    key: 'intro-menu',
    submenu: [
      {
        label: (
          <FormattedMessage
            id={`mainMenu.individuals.label`}
            defaultMessage={'Individuals'}
            description={`mainMenu item intro`}
          />
        ),
        key: 'individuals',
        element: (
          <RoutePage
            id="individuals"
            title="Bitcoin for Individuals"
            subtitle="Bitcoin is the easiest way to transact at a very low cost."
            body={<IndividualsBody />}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.businesses.label`}
            defaultMessage={'Businesses'}
            description={`mainMenu Business Label`}
          />
        ),
        key: 'businesses',
        element: (
          <RoutePage
            title="Business"
            id="business"
            subtitle="Bitcoin is a very secure and inexpensive way to handle payments."
            body={<BusinessBody />}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.devs.label`}
            defaultMessage={'Developers'}
            description={`mainMenu Devs Label`}
          />
        ),
        key: 'developers',
        element: (
          <RoutePage
            id="developers"
            title="Developers"
            subtitle="Bitcoin for Developers"
            body={<h1>Developers Body</h1>}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.gettings-started.label`}
            defaultMessage={`Getting Started`}
            description={`mainMenu getting started label`}
          />
        ),
        key: 'getting-started',
        element: (
          <RoutePage
            id="getting-started"
            title="Getting started with Bitcoin Il"
            subtitle="Using Bitcoin to transact is easy and accessible to everyone."
            body={<GettingStartedBody />}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.how-it-works.label`}
            defaultMessage={'How It Works'}
            description={`mainMenu how it works`}
          />
        ),
        key: 'how-it-works',
        element: (
          <RoutePage
            id="how-it-works"
            title="How It Works"
            subtitle="Bitcoin for How It Works"
            body={<HowItWorks />}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.white-paper.label`}
            defaultMessage={`White Paper`}
            description={`mainMenu white paper label`}
          />
        ),
        key: 'white-paper',
        element: (
          <RoutePage
            id="white-paper"
            title="White Paper"
            subtitle="Bitcoin for White Paper"
            body={<h1>White Paper Body</h1>}
          />
        )
      }
    ]
  },
  {
    label: (
      <FormattedMessage
        id={`mainMenu.resources.label`}
        defaultMessage={'Resources'}
        description={`mainMenu resources label`}
      />
    ),
    key: 'resources-menu',
    submenu: [
      {
        label: (
          <FormattedMessage
            id={`mainMenu.resources.label`}
            defaultMessage={'Resources'}
            description={`mainMenu.resources.label`}
          />
        ),
        key: 'resources',
        element: (
          <RoutePage
            id="resources"
            title="Resources"
            subtitle="Useful websites and resources about Bitcoin."
            body={<h1>Individuals Body</h1>}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.exchanges.label`}
            defaultMessage={'Exchanges'}
            description={`mainMenu.exchanges.label`}
          />
        ),
        key: 'exchanges',
        element: (
          <RoutePage
            title="Exchanges"
            id="exchanges"
            subtitle="Places to buy bitcoin in exchange for other currencies."
            body={<h1>Business Body</h1>}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.community.label`}
            defaultMessage={`Community`}
            description={`mainMenu.community.label`}
          />
        ),
        key: 'community',
        element: (
          <RoutePage
            id="Community"
            title="community"
            subtitle="Bitcoin for Community"
            body={<h1>Developers Body</h1>}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.docs.label`}
            defaultMessage={`Documentation`}
            description={`mainMenu.docs.label`}
          />
        ),
        key: 'documentation',
        element: (
          <RoutePage
            id="documentation"
            title="Documentation"
            subtitle="Learn Bitcoin and start building Bitcoin-based applications."
            body={<h1>Getting Started Body</h1>}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.vocab.label`}
            defaultMessage={`Vocabulary`}
            description={`mainMenu.vocab.label`}
          />
        ),
        key: 'vocabulary',
        element: (
          <RoutePage
            id="vocabulary"
            title="Vocabulary"
            subtitle="Bitcoin provides a new approach to payments and, as such, there are some new words that might become a part of your vocabulary."
            body={<h1>How It Works Body</h1>}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.events.label`}
            defaultMessage={`Events`}
            description={`mainMenu.events.label`}
          />
        ),

        key: 'events',
        element: (
          <RoutePage
            id="events"
            title="White Paper"
            subtitle="Find events, conferences and meetups all over the world. Subscribe to the RSS feed."
            body={<h1>White Paper Body</h1>}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.core.label`}
            defaultMessage={`BitCoin Il Core`}
            description={`mainMenu.core.label`}
          />
        ),
        key: 'core',
        element: (
          <RoutePage
            id="core"
            title="BitCoin Core"
            subtitle="Helping you keep Bitcoin decentralized."
            body={<h1>White Paper Body</h1>}
          />
        )
      }
    ]
  },
  {
    label: (
      <FormattedMessage
        id={`mainMenu.innovation.label`}
        defaultMessage={`Innovation`}
        description={`mainMenu.innovation.label`}
      />
    ),
    key: 'innovation',
    element: (
      <RoutePage
        id="innovation"
        title="Innovation in Payment Systems"
        subtitle="Bitcoin isn't just about sending money. It has many features and opens many possibilities that the community is still exploring. Here are some of the technologies currently being researched, and in some cases, being turned into real products and services. The most interesting uses of Bitcoin are probably still to be discovered."
        body={<InnovationBody />}
      />
    )
  },
  {
    label: (
      <FormattedMessage
        id={`mainMenu.participate.label`}
        defaultMessage={`Participate`}
        description={`mainMenu.participate.label`}
      />
    ),
    key: 'participate',
    submenu: [
      {
        label: (
          <FormattedMessage
            id={`mainMenu.cupport.label`}
            defaultMessage={`Support BitCoin Il`}
            description={`mainMenu.cupport.label`}
          />
        ),

        key: 'support',
        element: (
          <RoutePage
            id="Support"
            title="Support Bitcoin Il"
            subtitle="Bitcoin Il was born from a small community and has grown fast. There are a lot of things you can do to support it and help others learn more."
            body={<SupportBody />}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.buy.label`}
            defaultMessage={`Buy BitCoin Il`}
            description={`mainMenu.buy.label`}
          />
        ),

        key: 'Buy',
        element: (
          <RoutePage
            title="Buy"
            id="Buy"
            subtitle="Bitcoin - Buy"
            body={<>BUY</>}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.run-node.label`}
            defaultMessage={`Running a full Node`}
            description={`mainMenu.run-node.label`}
          />
        ),

        key: 'full-node',
        element: (
          <RoutePage
            id="full-node"
            title="full-node"
            subtitle="Bitcoin for full-node"
            body={<h1>Full Node</h1>}
          />
        )
      },
      {
        label: (
          <FormattedMessage
            id={`mainMenu.development.label`}
            defaultMessage={`Development`}
            description={`mainMenu.development.label`}
          />
        ),
        key: 'development',
        element: (
          <RoutePage
            id="development"
            title="Development"
            subtitle="Bitcoin for Development"
            body={<h1>Development Body</h1>}
          />
        )
      }
    ]
  },
  {
    label: (
      <FormattedMessage
        id={`mainMenu.faq.label`}
        defaultMessage={`FAQ`}
        description={`mainMenu.faq.label`}
      />
    ),

    key: 'FAQ',
    element: (
      <RoutePage
        id="FAQ"
        title="FAQ"
        subtitle="Bitcoin for FAQ"
        body={<h1>FAQ Body</h1>}
      />
    )
  }
]
