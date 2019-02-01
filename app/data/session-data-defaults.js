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
  'accountsNavItems': [
				{
					href: '',
					text: 'Summary',
					active: 'false'
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
      ]
    },
    {
      'name': 'Scunthorpe Integrated Iron & Steel Works',
      'accountHolder': 'British Steel Plc.',
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
      'accountHolder': 'MRC Trading Ltd.',
      'complianceStatusCode': 'A',
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
      'accountHolder': 'British Steel Plc.',
      'complianceStatusCode': 'B',
      'units': 2364,
      'permitId': 'EU-100-73104-0-76',
      'holdings': [
        {
          'generalAllowance': 1406
        }
      ]
    },
    {
      'name': 'Lynemouth Power Station',
      'accountHolder': 'Global Power Inc.',
      'complianceStatusCode': 'A',
      'units': 2364,
      'permitId': 'EU-100-77732-0-76',
      'holdings': [
        {
          'generalAllowance': 10473
        }
      ]
    }
  ],
  'existingAuthorisedRepresentatives': [
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
  ],
  'availableAuthorisedReps': [
    {
      name: 'Joe Brown',
      id: '939-216-693',
      jobTitle: 'Account Manager',
      email: 'joe.brown@blue.com',
      phone: '07823 423242'
    }
  ],
  'transactions': [
    {
      "transactionId": "EU472379",
      "started": "31/12/18 15:12",
      "lastUpdated": "31/12/18 15:12",
      "type": "10-72 Receipt of Allowances for Exchange",
      "units": 363,
      "unitType": "GA",
      "transferringAccount": "EU-110-54234-0-22",
      "acquiringAccount": "this",
      "status": "4-COMPLETED"
    },
    {
      "transactionId": "EU429591",
      "started": "27/12/18 16:47",
      "lastUpdated": "31/12/18 12:07",
      "type": "10-00 Internal Transfer",
      "units": 224,
      "unitType": "CER",
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-56193-0-12",
      "status": "4-COMPLETED"
    },
    {
      "transactionId": "EU647943",
      "started": "25/04/18 20:24",
      "lastUpdated": "25/04/18 20:24",
      "type": "10-02 Surrender Allowances",
      "units": 34523,
      "unitType": "GA",
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-63222-0-12",
      "status": "4-COMPLETED"
    },
    {
      "transactionId": "EU104957",
      "started": "24/02/18 01:46",
      "lastUpdated": "24/02/18 02:19",
      "type": "10-36 Allocation General Allowances",
      "units": 56612,
      "unitType": "GA",
      "transferringAccount": "EU-110-93932-0-11",
      "acquiringAccount": "this",
      "status": "4-COMPLETED"
    },
    {
      "transactionId": "EU672244",
      "started": "02/07/13 16:28",
      "lastUpdated": "02/07/13 16:28",
      "type": "01-34 Issuance General Allowances Banking",
      "units": 9756,
      "unitType": "GA",
      "transferringAccount": "EU-110-93932-0-11",
      "acquiringAccount": "this",
      "status": "4-COMPLETED"
    },
    {
      "transactionId": "EU289247",
      "started": "02/07/13 16:28",
      "lastUpdated": "02/07/13 16:28",
      "type": "01-34 Issuance General Allowances Banking",
      "units": 4244,
      "unitType": "GA",
      "transferringAccount": "EU-110-93932-0-11",
      "acquiringAccount": "this",
      "status": "4-COMPLETED"
    },
    {
      "transactionId": "EU345954",
      "started": "02/07/13 16:28",
      "lastUpdated": "02/07/13 16:28",
      "type": "10-34 Deletion General Allowances Banking",
      "units": 1122,
      "unitType": "GA",
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-59193-0-12",
      "status": "4-COMPLETED"
    },
    {
      "transactionId": "EU345090",
      "started": "19/04/13 12:38",
      "lastUpdated": "22/04/13 14:38",
      "type": "10-00 Internal Transfer",
      "units": 553423,
      "unitType": "GA",
      "transferringAccount": "this",
      "acquiringAccount": "EU-110-59193-0-12",
      "status": "4-COMPLETED"
    },
    {
      "transactionId": "EU945398",
      "started": "05/06/12 00:00",
      "lastUpdated": "05/06/12 00:00",
      "type": "01-32 Decoupling",
      "units": 678654,
      "unitType": "GA",
      "transferringAccount": "EU-110-56193-0-12",
      "acquiringAccount": "this",
      "status": "4-COMPLETED"
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
  ],
  'tasks': [
    {
      type: 'Transfer',
      startDate: '15 January 13:15pm',
      referenceNumber: 'QR-454-665-34',
      units: [
        {
          unitType: 'General Allowance',
          unitAmount: '234'
        }
      ],
      proposer: 'Divina Glaser',
      accountFromID: 'EU-100-73432-0-76',
      accountFromName: 'Nevern Power Limited',
      accountToID: 'EU-100-77732-0-76',
      accountToName: 'Lynemouth Power Station',
      notes: 'Closes contract QQRN-3245 previously agreed on 25-JUN. Speak to Richard Curtis for further details',
      status: 'open'
    },
    {
      type: 'Surrender',
      startDate: '12 January 20:55pm',
      referenceNumber: 'EU596032',
      units: [
        {
          unitType: 'General Allowance',
          unitAmount: '2160'
        }
      ],
      proposer: 'Luann Steppe',
      accountFromID: 'EU-100-82345-0-76',
      accountFromName: 'Scunthorpe Integrated Iron & Steel Works',
      notes: 'Surrendering for year 2018',
      status: 'open'
    },
    {
      type: 'Submission',
      startDate: '18 January 10:19pm',
      referenceNumber: 'HXJ76393F',
      units: [
        {
          unitType: 'Carbon dioxide (C0<sub>2</sub>)',
          unitAmount: '2800'
        },
        {
          unitType: 'Perfluorocarbons (PFCs)',
          unitAmount: '568'
        },
        {
          unitType: 'Nitrous oxide (N<sub>2</sub>O)',
          unitAmount: '43'
        }
      ],
      proposer: 'Tyra Lucas',
      accountFromID: 'EU-100-77732-0-76',
      accountFromName: 'Lynemouth Power Station',
      verifier: 'Lucideon',
      notes: 'Submitting emission for 2018',
      status: 'open'
    },
    {
      type: 'Transfer',
      startDate: '16 January 7:55pm',
      referenceNumber: 'QR-054-103-90',
      units: [
        {
          unitType: 'CER',
          unitAmount: '303'
        }
      ],
      proposer: 'Tyra Lucas',
      accountFromID: 'EU-100-73104-0-76',
      accountFromName: 'Port Talbot Steelworks',
      accountToID: 'EU-100-82345-0-76',
      accountToName: 'Scunthorpe Integrated Iron & Steel Works',
      notes: 'Shortfall covering',
      status: 'open'
    }
  ]
}
