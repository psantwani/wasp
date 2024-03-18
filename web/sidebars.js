module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      collapsible: false,
      items: [
        'introduction/introduction',
        'introduction/quick-start',
        'introduction/editor-setup',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial',
      collapsed: false,
      collapsible: false,
      items: [
        'tutorial/create',
        'tutorial/project-structure',
        'tutorial/pages',
        'tutorial/entities',
        'tutorial/queries',
        'tutorial/actions',
        'tutorial/auth',
      ],
    },
    {
      type: 'category',
      label: 'Data Model',
      collapsed: false,
      collapsible: false,
      items: [
        'data-model/entities',
        {
          type: 'category',
          label: 'Operations',
          collapsed: true,
          items: [
            'data-model/operations/overview',
            'data-model/operations/queries',
            'data-model/operations/actions',
          ],
        },
        'data-model/crud',
        'data-model/backends',
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      collapsed: false,
      collapsible: false,
      items: [
        'auth/overview',
        'auth/ui',
        'auth/username-and-pass',
        'auth/email',
        {
          type: 'category',
          label: 'Social Auth',
          collapsed: true,
          items: [
            'auth/social-auth/overview',
            'auth/social-auth/github',
            'auth/social-auth/google',
            'auth/social-auth/keycloak',
          ],
        },
        'auth/entities/entities',
      ],
    },
    {
      type: 'category',
      label: 'Project Setup',
      collapsed: false,
      collapsible: false,
      items: [
        'project/starter-templates',
        'project/customizing-app',
        'project/client-config',
        'project/server-config',
        'project/static-assets',
        'project/env-vars',
        'project/testing',
        'project/dependencies',
        'project/css-frameworks',
        'project/custom-vite-config',
      ],
    },
    {
      type: 'category',
      label: 'Wasp AI',
      collapsed: false,
      collapsible: false,
      items: ['wasp-ai/creating-new-app', 'wasp-ai/developing-existing-app'],
    },
    {
      type: 'category',
      label: 'Advanced Features',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Deployment',
          collapsed: true,
          items: [
            'advanced/deployment/overview',
            'advanced/deployment/cli',
            'advanced/deployment/manually',
          ],
        },
        'advanced/email/email',
        'advanced/jobs',
        'advanced/web-sockets',
        'advanced/accessing-app-config',
        'advanced/apis',
        'advanced/middleware-config',
        'advanced/links',
      ],
    },
    {
      type: 'category',
      label: 'General',
      collapsed: false,
      collapsible: false,
      items: ['general/language', 'general/cli'],
    },
    {
      type: 'category',
      label: 'Miscellaneous',
      collapsed: false,
      collapsible: false,
      items: [
        'contributing',
        'telemetry',
        'vision',
        'contact',
        'migrate-from-0-11-to-0-12',
      ],
    },
  ],
}
