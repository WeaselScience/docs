module.exports = {
  mySidebar: [
    'introduction',
    {
      type: 'autogenerated',
      dirName: 'architecture',
    },
    {
      type: 'autogenerated',
      dirName: 'quick-start',
    },
    {
      type: 'category',
      label: 'Installation',
      link: { type: 'doc', id: 'installation/installation',},
      items:[
        'installation/requirements',
        'installation/configuration',
        'installation/network-options',
        'installation/private-registry',
        'installation/airgap',
        'installation/server-roles',
        'installation/packaged-components',
        'installation/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Cluster Datastore',
      link: {type: 'doc', id: 'datastore/datastore',},
      items: [
        'datastore/backup-restore',
        'datastore/ha-embedded',
        'datastore/ha',
        'datastore/cluster-loadbalancer',
      ],
    },
    {
      type: 'autogenerated',
      dirName: 'cluster-access',
    },
    {
      type: 'category',
      label: 'Upgrades',
      link: {type: 'doc', id: 'upgrades/upgrades',},
      items:[
        'upgrades/killall',
        'upgrades/manual',
        'upgrades/automated',
      ],
    },
    {
      type: 'autogenerated',
      dirName: 'storage',
    },
    {
      type: 'autogenerated',
      dirName: 'networking',
    },
    {
      type: 'autogenerated',
      dirName: 'helm',
    },
    {
      type: 'autogenerated',
      dirName: 'advanced',
    },
    {
      type: 'autogenerated',
      dirName: 'faq',
    },
    {
      type: 'category',
      label: 'CLI Tools',
      link: {type: 'doc', id: 'cli/cli'},
      items: [
        'cli/server',
        'cli/agent',
        'cli/certificate',
        'cli/etcd-snapshot',
        'cli/secrets-encrypt',
        'cli/token',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'doc', id: 'reference/reference',},
      items: [
        'reference/env-variables',
        'reference/resource-profiling',
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        {
          type: 'autogenerated',
          dirName: 'release-notes',
        },
      ],
    },
    {
      type: 'autogenerated',
      dirName: 'known-issues',
    },
    {
      type: 'category',
      label: 'Security',
      link: {type: 'doc', id: 'security/security'},
      items:[
        'security/secrets-encryption',
        'security/hardening-guide',
        'security/self-assessment',
      ],
    },
  ],
};
