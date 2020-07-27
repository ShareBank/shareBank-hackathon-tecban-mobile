import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.33:3333"
});

export default() => ({

  signin: async (email, password) => { 
    return await api.post('/users/signin',{ email,	password })
      .then((response)=>{
        console.log(response.data);
        return response.data.res;
      }).catch((error)=>{
        console.log(error.message);
      })
  },
  signup: async (name, email, password) => {
    return await api.post('/users/signup',{ name, email,	password })
      .then((response)=>{
        return response.data.res;
      })
  },
  //Openbank
  //Contas
  openbankAccounts:async ()=>{
    const {Data} = api.get('/openbank/accounts')
    return Data['Account'];
  },
  openbankAccountsId:async (accountId)=>{
    const {Data} = api.get(`/openbank/accounts/${accountId}`)
    return Data['Account'];
  },
  // Saldos
  openbankBalances:async ()=>{
    return await api.get('/openbank/balances')
    .then((response)=>{      
      return response.data.res;
    })
  },
  openbankBalancesId:async (accountId)=>{
    return await api.get(`/openbank/balances/${accountId}`)
    .then((response)=>{
      return response.data.res;
    })
  },
  // Transações
  openbankTransactions:async ()=>{
    return await api.get('/openbank/transactions')
    .then((response)=>{
        return response.data.res;
      })
  },
  openbankTransactionsId:async (accountId)=>{
    return await api.get(`/openbank/transactions/${accountId}`)
    .then((response)=>{
        return response.data.res;
      })
  },
  // Ofertas
  openbankOffers:async ()=>{
    return await api.get('/openbank/offers')
    .then((response)=>{
        return response.data.res;
      })
  },
  openbankOffersId:async (accountId)=>{
    return await api.get(`/openbank/offers/${accountId}`)
    .then((response)=>{
        return response.data.res;
      })
  },
  // Agendamentos de pagamentos
  openbankScheduledPayments:async ()=>{
    return await api.get('/openbank/scheduled-payments')
    .then((response)=>{
        return response.data.res;
      })
  },
  openbankScheduledPaymentsId:async (accountId)=>{
    return await api.get(`/openbank/scheduled-payments/${accountId}`)
    .then((response)=>{
        return response.data.res;
      })
  },
  // Transferencias Programadas
  openbankStandingOrders:async ()=>{
    return await api.get('/openbank/standing-orders')
    .then((response)=>{
        return response.data.res;
      })
  },
  openbankStandingOrdersId:async (accountId)=>{
    return await api.get(`/openbank/standing-orders/${accountId}`)
    .then((response)=>{
        return response.data.res;
      })
  },
  // Extratos
  openbankStatements:async ()=>{
    return await api.get('/openbank/statements')
    .then((response)=>{
      return response.data.res;
    })
  },
  openbankStatementsId:async (accountId)=>{
    return await api.get(`/openbank/standing-orders/${accountId}`)
    .then((response)=>{
      return response.data.res;
    })
  },
  openbankStatementsAcount:async (accountId,statementId)=>{
    return await api.get(`/openbank/standing-orders/?id=${accountId}&sid=${statementId}`)
    .then((response)=>{
      return response.data.res;
    })
  },
  openbankStatementsAcountTransactions:async (accountId,statementId)=>{
    return await api.get(`/openbank/standing-orders/?id=${accountId}&sid=${statementId}/transactions`)
    .then((response)=>{
      return response.data.res;
    })
  },
  // ATMs
  openbankAtms:async ()=>{
    return await api.get('/openbank/atms')
      .then((response)=>{
        return response.data.res;
      })
  },
  // Agencias
  openbankBranches:async ()=>{
    return await api.get('/openbank/branches')
      .then((response)=>{
        return response.data.res;
      })
  },
  // Produtos
  openbankAtms:async ()=>{
    return await api.get('/openbank/products')
      .then((response)=>{
        return response.data.res;
      })
  },
});