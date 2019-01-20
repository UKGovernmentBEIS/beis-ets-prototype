/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here
  'installations': [
    {
      'name': 'Nevern Power Limited',
      'permitId': 'EU-100-73432-0-76',
      'emissionAllowance': [
        {
          'general-allowance': 52834
        }
      ]
    },
    {
      'name': 'Scunthorpe Integrated Iron & Steel Works',
      'permitId': 'EU-100-82345-0-76',
      'emissionAllowance': [
        {
          'general-allowance': 23871,
          'CER': 138,
          'ERU': 20
        }
      ]
    },
    {
      'name': 'Port Talbot Steelworks',
      'permitId': 'EU-100-73104-0-76',
      'emissionAllowance': [
        {
          'general-allowance': 1406
        }
      ]
    },
    {
      'name': 'Lynemouth Power Station',
      'permitId': 'EU-100-77732-0-76',
      'emissionAllowance': [
        {
          'general-allowance': 10473
        }
      ]
    }
  ],
  'existing-authorised-representatives': [
    {
      name: 'Divina Glaser',
      id: 'EU-66-5684-0-20'
    },
    {
      name: 'Luann Steppe',
      id: 'EU-66-5684-0-21'
    },
    {
      name: 'Jimmy Pressly',
      id: 'EU-66-5684-0-22'
    },
    {
      name: 'Tyra Lucas',
      id: 'EU-66-5684-0-23'
    },
    {
      name: 'Terisa Pritchett',
      id: 'EU-66-5684-0-24'
    },
    {
      name: 'Cecille Irving',
      id: 'EU-66-5684-0-25'
    },
    {
      name: 'Elna Kraushaar',
      id: 'EU-66-5684-0-26'
    },
    {
      name: 'Luella Hover',
      id: 'EU-66-5684-0-27'
    },
    {
      name: 'Eloisa Albert',
      id: 'EU-66-5684-0-28'
    },
    {
      name: 'Fatimah Huffines',
      id: 'EU-66-5684-0-29'
    }
  ],
  'existing-accounts': [
    {
      name: 'National Grid Gas plc',
      id: 'EU-100-8976-0-88'
    },
    {
      name: 'Conoco Phillips',
      id: 'EU-100-82543-0-87'
    },
    {
      name: 'Dalkia Utilities Services',
      id: 'EU-100-625343-0-99'
    },
    {
      name: 'Perenco UK Ltd',
      id: 'EU-100-11674-0-56'
    },
    {
      name: 'Polimeri Europa UK Limited',
      id: 'EU-100-77732-0-76'
    },
    {
      name: 'De La Rue International Ltd',
      id: 'EU-100-63522-0-03'
    },
    {
      name: 'E.ON UK CHP Ltd',
      id: 'EU-100-99924-0-23'
    },
    {
      name: 'Citigen (London) Ltd',
      id: 'EU-100-38476-0-24'
    },
    {
      name: 'Procter & Gamble Product Supply (UK) Ltd',
      id: 'EU-100-4847-0-25'
    }
  ]
}
