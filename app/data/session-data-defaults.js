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
// var randomRep = this.existingAuthorisedRepresentatives[Math.floor(Math.random() * (this.existingAuthorisedRepresentatives.length))].name
module.exports.reps = [
  {
    name: 'Divina Glaser',
    id: '567-235-123',
    jobTitle: 'Financial Controller',
    email: 'divina.glaser@rertsss.com',
    phone: '07823 423242',
    status: 'open'
  },
  {
    name: 'Luann Steppe',
    id: '245-334-223',
    jobTitle: 'Compliance Manager',
    email: 'Luann Steppe@grantsignal.com',
    phone: '07823 256765',
    status: 'open'
  },
  {
    name: 'Jimmy Pressly',
    id: '442-451-234',
    jobTitle: 'Financial Controller',
    email: 'jim.pre@brentcross.com',
    phone: '07235 234423',
    status: 'open'
  },
  {
    name: 'Tyra Lucas',
    id: '774-143-235',
    jobTitle: 'Compliance Controller',
    email: 'tyra@sertsprocter.com',
    phone: '07823 427944',
    status: 'open'
  },
  {
    name: 'Terisa Pritchett',
    id: '344-626-343',
    jobTitle: 'Financial Manager',
    email: 't.p@roystonvaysey.com',
    phone: '07823 242323',
    status: 'open'
  },
  {
    name: 'Cecille Irving',
    id: '266-423-423',
    jobTitle: 'Financial Controller',
    email: 'cecille@reretscottley.com',
    phone: '07823 274545',
    status: 'open'
  },
  {
    name: 'Registry user',
    id: '999-999-999',
    jobTitle: 'Authorised representative',
    email: 'user@ets.uk',
    phone: '07893 7654',
    status: 'open'
  }
]
module.exports = {

  // Insert values here
  'accountsNavItems': [
				{
					href: '',
					text: 'Summary',
					active: 'false'
				}
			],
  'organisations': [
				{
          'id': '424434',
					'companyName': 'Global Power Inc.',
					'registrationNumber': '3242342667',
					'status': 'open'
				},
				{
          'id': '934572',
					'companyName': 'British Steel Plc.',
					'registrationNumber': '5829384513',
					'status': 'open'
				}
			],
  'installations': [
    {
      'name': 'Nevern Power Limited',
      'organisationId': '424434',
      'organisation': 'Global Power Inc.',
      'complianceStatusCode': 'A',
      'status': 'open',
      'units': 2364,
      'permitId': 'EU-100-73432-0-76',
      'type': 'installation',
      'holdings': [
        {
          'generalAllowance': 52834
        }
      ],
      address: {
        street: '41 Station Road',
        city: 'SOUTH WEST LONDON',
        postcode: 'SW46 1OM'
      },
      contact: {
        person: 'sarah.phillips@example.com',
        number: '07700 900457'
      }
    },
    {
      'name': 'Scunthorpe Integrated Iron & Steel Works',
      'organisationId': '934572',
      'organisation': 'British Steel plc',
      'complianceStatusCode': 'B',
      'status': 'open',
      'units': 2364,
      'permitId': 'EU-100-82345-0-76',
      'type': 'installation',
      'holdings': [
        {
          'generalAllowance': 23871,
          'CER': 138,
          'ERU': 20
        }
      ]
    },
    {
      'name': 'ETS Trades',
      'organisationId': '424434',
      'organisation': 'Global Power Inc.',
      'status': 'open',
      'units': 2500,
      'permitId': 'EU-100-82345-0-757',
      'type': 'trading',
      'holdings': [
        {
          'generalAllowance': 1978,
          'CER': 500,
          'ERU': 22
        }
      ]
    },
    {
      'name': 'Port Talbot Steelworks',
      'organisationId': '934572',
      'organisation': 'British Steel plc',
      'complianceStatusCode': 'C',
      'status': 'open',
      'units': 2364,
      'permitId': 'EU-100-73104-0-76',
      'type': 'installation',
      'holdings': [
        {
          'generalAllowance': 2480
        }
      ]
    },
    {
      'name': 'Lynemouth Power Station',
      'organisationId': '424434',
      'organisation': 'Global Power Inc.',
      'complianceStatusCode': 'C',
      'status': 'open',
      'units': 2364,
      'permitId': 'EU-100-77732-0-76',
      'type': 'installation',
      'holdings': [
        {
          'generalAllowance': 10473
        }
      ]
    }
  ],
  'existingAuthorisedRepresentatives': module.exports.reps,
  'transactions': [
    {
      "transactionId": "EU472379",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Allocation for exchange",
      units: [
        {
          type: 'allowances',
          amount: 363
        }
      ],
      "transferringAccount": "EU-110-54234-0-22",
      "acquiringAccount": "this",
      "status": "Completed",
      'notes': "",
      'proposerId': module.exports.reps[3].id,
      'proposer': module.exports.reps[3].name,
      'approver': module.exports.reps[1].name
    },
    {
      "transactionId": "EU429591",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Transfer",
      units: [
        {
          type: 'CER',
          amount: 67
        }
      ],
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-56193-0-12",
      "status": "Completed",
      'notes': "",
      'proposerId': module.exports.reps[2].id,
      'proposer': module.exports.reps[2].name,
      'approver': module.exports.reps[3].name
    },
    {
      "transactionId": "EU647943",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Surrender",
      units: [
        {
          type: 'allowances',
          amount: 3468
        }
      ],
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-63222-0-12",
      "status": "Completed",
      'notes': "",
      'proposerId': module.exports.reps[4].id,
      'proposer': module.exports.reps[4].name,
      'approver': module.exports.reps[2].name
    },
    {
      "transactionId": "EU104957",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Allocation",
      units: [
        {
          type: 'allowances',
          amount: 5661
        }
      ],
      "transferringAccount": "EU-110-93932-0-11",
      "acquiringAccount": "this",
      "status": "Completed",
      'notes': "",
      'proposerId': module.exports.reps[2].id,
      'proposer': module.exports.reps[2].name,
      'approver': module.exports.reps[5].name
    },
    {
      "transactionId": "EU672244",
      "started": new Date(1550251388999).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Allocation",
      units: [
        {
          type: 'allowances',
          amount: 9674
        }
      ],
      "transferringAccount": "EU-110-93932-0-11",
      "acquiringAccount": "this",
      "status": "Completed",
      'notes': "",
      'proposerId': module.exports.reps[2].id,
      'proposer': module.exports.reps[2].name,
      'approver': module.exports.reps[4].name
    },
    {
      "transactionId": "EU289247",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Allocation",
      units: [
        {
          type: 'allowances',
          amount: 4244
        }
      ],
      "transferringAccount": "EU-110-93932-0-11",
      "acquiringAccount": "this",
      "status": "Completed",
      'notes': "",
      'proposerId': module.exports.reps[2].id,
      'proposer': module.exports.reps[2].name,
      'approver': module.exports.reps[1].name
    },
    {
      "transactionId": "EU345954",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Deletion",
      units: [
        {
          type: 'allowances',
          amount: 1112
        }
      ],
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-59193-0-12",
      "status": "Completed",
      'notes': "",
      'proposerId': module.exports.reps[2].id,
      'proposer': module.exports.reps[2].name,
      'approver': module.exports.reps[5].name
    },
    {
      "transactionId": "EU345090",
      "started": new Date(1550251388999).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Transfer",
      units: [
        {
          type: 'allowances',
          amount: 864
        }
      ],
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-59193-0-12",
      "status": "Failed",
      'notes': "",
      'proposer': module.exports.reps[5].name,
      'proposerId': module.exports.reps[5].id,
    },
    {
      "transactionId": "EU945398",
      "started": new Date(1550251388941).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Transfer",
      units: [
        {
          type: 'allowances',
          amount: 657
        }
      ],
      "transferringAccount": "EU-110-56193-0-12",
      "acquiringAccount": "this",
      "status": "Completed",
      'notes': "",
      'proposer': module.exports.reps[3].name,
      'proposerId': module.exports.reps[3].id,
      'approver': module.exports.reps[2].name
    },
    {
      "transactionId": "EU903339",
      "started": new Date(1551372160000).toISOString(),
      "lastUpdated": new Date(1551372160000).toISOString(),
      "type": "Transfer",
      units: [
        {
          type: 'allowances',
          amount: 243
        }
      ],
      "transferringAccount": "EU-110-56193-0-12",
      "acquiringAccount": "this",
      "status": "Awaiting approval",
      'proposer': module.exports.reps[1].name,
      'proposerId': module.exports.reps[1].id,
      'notes': 'Closes contract QQRN-3245 previously agreed on 25-JUN. Speak to Richard Curtis for further details'
    },
    {
      "transactionId": "EU596032",
      "started": new Date(1551372160000).toISOString(),
      "lastUpdated": new Date(1551372160000).toISOString(),
      "type": "Surrender",
      units: [
        {
          type: 'allowances',
          amount: 2160
        }
      ],
      "transferringAccount": "EU-100-82345-0-76",
      "acquiringAccount": "this",
      "status": "Awaiting approval",
      'notes': "Surrendering for year 2018",
      'proposer': module.exports.reps[5].name,
      'proposerId': module.exports.reps[5].id
    }
  ],
  'existingAccounts': [
    {
      name: 'National Grid Gas plc',
      legalEntity: 'National Gas plc',
      id: 'EU-100-8976-0-88'
    },
    {
      name: 'Conoco Phillips',
      legalEntity: 'Conoco Industrial Group plc',
      id: 'EU-100-82543-0-87'
    },
    {
      name: 'Dalkia Utilities Services',
      legalEntity: 'Dalkia Utilities Services Ltd',
      id: 'EU-100-625343-0-99'
    },
    {
      name: 'Perenco UK Ltd',
      legalEntity: 'Perenco Parenthis Trading Global plc',
      id: 'EU-100-11674-0-56'
    },
    {
      name: 'Polimeri Europa UK Limited',
      legalEntity: 'Polimeri Global Industries plc',
      id: 'EU-100-77732-0-76'
    },
    {
      name: 'De La Rue International Ltd',
      legalEntity: 'La Roux Group plc',
      id: 'EU-100-63522-0-03'
    },
    {
      name: 'E.ON UK CHP Ltd',
      legalEntity: 'E.ON Industries plc',
      id: 'EU-100-99924-0-23'
    },
    {
      name: 'Citigen (London) Ltd',
      legalEntity: 'Powergen Incorporated plc',
      id: 'EU-100-38476-0-24'
    },
    {
      name: 'Procter & Gamble Product Supply (UK) Ltd',
      legalEntity: 'P&G Group plc',
      id: 'EU-100-4847-0-25'
    }
  ]
}
