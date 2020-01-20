
module.exports = {
  async whatTarget(...args) {
    try {
      const [target, action, variables, fileName] = args;
      switch (target) {
        case 'bank':
          const Bank = require('./bank');
          const bank = new Bank(action, variables, fileName);
          const resBank = await bank.selectAndExecuteAction();
          return resBank;
        case 'paymentTerm':
          const PaymentTerm = require('./paymentTerm');
          const paymentTerm = new PaymentTerm(action, variables, fileName);
          const resPaymentTerm = await paymentTerm.selectAndExecuteAction();
          return resPaymentTerm;
        case 'plotsPaymentTerm':
          const PlotPaymentTerm = require('./plotPaymentTerm');
          const plotPaymentTerm = new PlotPaymentTerm(action, variables, fileName);
          const resPlotPaymentTerm = await plotPaymentTerm.selectAndExecuteAction();
          return resPlotPaymentTerm;  
        case 'postdatedCheck':
          const PostdatedCheck = require('./postdatedCheck');
          const postdatedCheck = new PostdatedCheck(action, variables, fileName);
          const resPostdatedCheck = await postdatedCheck.selectAndExecuteAction();
          return resPostdatedCheck;  
        case 'billsToPay':
          const BillsToPay = require('./billsToPay');
          const billsToPay = new BillsToPay(action, variables, fileName);
          const resBillsToPay = await billsToPay.selectAndExecuteAction();
          return resBillsToPay;
        case 'billsToReceive':
          const BillsToReceive = require('./billsToReceive');
          const billsToReceive = new BillsToReceive(action, variables, fileName);
          const resBillsToReceive = await billsToReceive.selectAndExecuteAction();
          return resBillsToReceive;  
        case 'paymentForm':
          const PaymentForm = require('./paymentForm');
          const paymentForm = new PaymentForm(action, variables, fileName);
          const resPaymentForm = await paymentForm.selectAndExecuteAction();
          return resPaymentForm;
        case 'cards':
          const Card = require('./cards');
          const card = new Card(action, variables, fileName);
          const resCard = await card.selectAndExecuteAction();
          return resCard;  
        default:
          break;
      }
    } catch (error) {
      throw new Error(error.message)      
    }
  },
}