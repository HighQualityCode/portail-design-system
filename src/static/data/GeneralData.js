let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

let clients = [
  {
    name: 'Adam L1',
    type: { name: 'Person' },
    earned: '3,123.34',
    number: '293932',
    invoice_date: '1999-02-20',
    invoice_duedate: '2000-10-20',
    emailed_date: '2000-11-09',
    status: 'converted',
    has_disbursement: true,
    total_disbursement: 120,
    client: {
      title: 'Mr Donghai'
    },
    deposit: {
      prepaid_amount: 50,
      has_percentage: false
    },
    totalTTC: () => {
      return 200
    }
  },
  {
    name: 'Adam L2',
    type: { name: 'ABC' },
    earned: '3,123.34',
    number: '293932',
    invoice_date: '1999-02-20',
    invoice_duedate: '2000-10-20',
    emailed_date: '2000-11-09',
    status: 'converted'
  },
  {
    name: 'Adam L3',
    type: { name: 'BCA' },
    earned: '3,123.34',
    number: '293932',
    invoice_date: '1999-02-20',
    invoice_duedate: '2000-10-20',
    emailed_date: '2000-11-09',
    status: 'converted'
  },
  {
    name: 'Adam L4',
    type: { name: 'CDE' },
    earned: '3,123.34',
    number: '293932',
    invoice_date: '1999-02-20',
    invoice_duedate: '2000-10-20',
    emailed_date: '2000-11-09',
    status: 'converted'
  }
]

export default {
  text,
  clients
}
