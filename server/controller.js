const Ticket = require('./ticketSchema');

const controller = {};


controller.addTicket = async (req, res, next) => {
    const { body } = req;
    console.log('just the body', body);
  try {
    const ticket = await Ticket.create(body)
    res.locals.newTicket = ticket;
    return next();
  } catch (err) {
    return next({
        log: 'ERROR: controller.addTicket, ticket.create',
        message: err
      })
  }
};

controller.showTickets = async (req, res, next) => {
    try {
        const tickets = await Ticket.find({})
        console.log('IS All TICKET', tickets);
        res.locals.allTickets = tickets;
        return next();
      } catch (err) {
        console.log('from inside', err)
        return next({
            log: 'ERROR: controller.showTickets',
            message: err
          })
      }
}

controller.grabHelpTicket = async (req, res, next) => {
    const { id } = req.params;
  try {
    const ticket = await Ticket.findOneAndUpdate({_id: id}, {helpStatus: true})
    console.log(ticket);
    return next();

  } catch (err) {
    return next({
        log: 'ERROR: controller.grabHelpTicket',
        message: err
      })
  }
};

controller.grabSymTicket = async (req, res, next) => {
  const { id } = req.params;
try {
  const oldTicket = await Ticket.findOne({_id: id})
  const ticket = await Ticket.findOneAndUpdate({_id: id}, {frowns: `:'(    ${oldTicket.frowns}`})
  console.log(ticket);
  return next();

} catch (err) {
  return next({
      log: 'ERROR: controller.grabSymTicket',
      message: err
    })
}
}

controller.deleteTicket = async (req, res, next) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findOneAndDelete({_id: id})
    console.log(ticket);
    return next();

  } catch (err) {
    return next({
      log: 'ERROR: controller.deleteTicket',
      message: err
    })
  }
};

module.exports = controller;