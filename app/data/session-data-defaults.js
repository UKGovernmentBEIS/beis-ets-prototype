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
    phone: '07823 423242'
  },
  {
    name: 'Luann Steppe',
    id: '245-334-223',
    jobTitle: 'Compliance Manager',
    email: 'Luann Steppe@grantsignal.com',
    phone: '07823 256765'
  },
  {
    name: 'Jimmy Pressly',
    id: '442-451-234',
    jobTitle: 'Financial Controller',
    email: 'jim.pre@brentcross.com',
    phone: '07235 234423'
  },
  {
    name: 'Tyra Lucas',
    id: '774-143-235',
    jobTitle: 'Compliance Controller',
    email: 'tyra@sertsprocter.com',
    phone: '07823 427944'
  },
  {
    name: 'Terisa Pritchett',
    id: '344-626-343',
    jobTitle: 'Financial Manager',
    email: 't.p@roystonvaysey.com',
    phone: '07823 242323'
  },
  {
    name: 'Cecille Irving',
    id: '266-423-423',
    jobTitle: 'Financial Controller',
    email: 'cecille@reretscottley.com',
    phone: '07823 274545'
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
  'accountHolders': [
				{
					'companyName': 'Lufberg Concrete Ltd.',
					'registrationNumber': '3242342667',
					'numberOfTradingAccounts': 3,
					'numberOfInstallationAccounts': 5,
					'numberOfAdminUsers': 2,
					'status': 'active'
				}
			],
  'installations': [
    {
      'name': 'Nevern Power Limited',
      'accountHolder': 'Global Power Inc.',
      'complianceStatusCode': 'A',
      'units': 2364,
      'permitId': 'EU-100-73432-0-76',
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
      'accountHolder': 'British Steel plc',
      'complianceStatusCode': 'B',
      'units': 2364,
      'permitId': 'EU-100-82345-0-76',
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
      'accountHolder': 'MRC Trading Ltd',
      'complianceStatusCode': 'C',
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
      'accountHolder': 'British Steel plc',
      'complianceStatusCode': 'C',
      'units': 2364,
      'permitId': 'EU-100-73104-0-76',
      'holdings': [
        {
          'generalAllowance': 2480
        }
      ]
    },
    {
      'name': 'Lynemouth Power Station',
      'accountHolder': 'Global Power Inc.',
      'complianceStatusCode': 'C',
      'units': 2364,
      'permitId': 'EU-100-77732-0-76',
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
      "type": "10-72 Receipt of allowances for exchange",
      "units": 363,
      "unitType": "allowances",
      "transferringAccount": "EU-110-54234-0-22",
      "acquiringAccount": "this",
      "status": "Completed",
      'proposer': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name,
      'approver': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name
    },
    {
      "transactionId": "EU429591",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Transfer",
      "units": 224,
      "unitType": "CER",
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-56193-0-12",
      "status": "Completed",
      'proposer': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name,
      'approver': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name
    },
    {
      "transactionId": "EU647943",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "10-02 Surrender allowances",
      "units": 34523,
      "unitType": "allowances",
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-63222-0-12",
      "status": "Completed",
      'proposer': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name,
      'approver': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name
    },
    {
      "transactionId": "EU104957",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "10-36 Allocation allowances",
      "units": 56612,
      "unitType": "allowances",
      "transferringAccount": "EU-110-93932-0-11",
      "acquiringAccount": "this",
      "status": "Completed",
      'proposer': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name,
      'approver': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name
    },
    {
      "transactionId": "EU672244",
      "started": new Date(1550251388999).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "01-34 Issuance allowances banking",
      "units": 9756,
      "unitType": "allowances",
      "transferringAccount": "EU-110-93932-0-11",
      "acquiringAccount": "this",
      "status": "Completed",
      'proposer': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name,
      'approver': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name
    },
    {
      "transactionId": "EU289247",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "01-34 Issuance allowances banking",
      "units": 4244,
      "unitType": "allowances",
      "transferringAccount": "EU-110-93932-0-11",
      "acquiringAccount": "this",
      "status": "Completed",
      'proposer': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name,
      'approver': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name
    },
    {
      "transactionId": "EU345954",
      "started": new Date(1550251388943).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "10-34 Deletion allowances banking",
      "units": 1122,
      "unitType": "allowances",
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-59193-0-12",
      "status": "Completed",
      'proposer': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name,
      'approver': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name
    },
    {
      "transactionId": "EU345090",
      "started": new Date(1550251388999).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Transfer",
      "units": 553423,
      "unitType": "allowances",
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-59193-0-12",
      "status": "Failed"
    },
    {
      "transactionId": "EU945398",
      "started": new Date(1550251388941).toISOString(),
      "lastUpdated": new Date(1550251388941).toISOString(),
      "type": "Transfer",
      "units": 678654,
      "unitType": "allowances",
      "transferringAccount": "EU-110-56193-0-12",
      "acquiringAccount": "this",
      "status": "Completed",
      'proposer': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name,
      'approver': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name
    },
    {
      "transactionId": "EU903339",
      "started": new Date(1551372160000).toISOString(),
      "lastUpdated": new Date(1551372160000).toISOString(),
      "type": "Transfer",
      "units": 243,
      "unitType": "allowances",
      "transferringAccount": "EU-110-56193-0-12",
      "acquiringAccount": "this",
      "status": "Awaiting approval",
      'proposer': module.exports.reps[Math.floor(Math.random() * (module.exports.reps.length))].name,
      'notes': 'Closes contract QQRN-3245 previously agreed on 25-JUN. Speak to Richard Curtis for further details'
    },
    {
      "transactionId": "EU596032",
      "started": new Date(1551372160000).toISOString(),
      "lastUpdated": new Date(1551372160000).toISOString(),
      "type": "Surrender",
      "units": 2160,
      "unitType": "allowances",
      "transferringAccount": "EU-100-82345-0-76",
      "acquiringAccount": "this",
      "status": "Awaiting approval",
      'proposer': 'Luann Steppe',
      'notes': 'Surrendering for year 2018'
    },
    {
      "transactionId": "EU790032",
      "started": new Date(1551372160000).toISOString(),
      "lastUpdated": new Date(1551372160000).toISOString(),
      "type": "Submission",
      "units": 2800,
      "unitType": "allowances",
      'verifier': 'Lucideon',
      "transferringAccount": "EU-100-77732-0-76",
      "acquiringAccount": "this",
      "status": "Awaiting approval",
      'proposer': 'Tyra Lucas',
      'notes': 'Submitting emission for 2018'
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
