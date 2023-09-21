const Ticket = require('./ticketSchema');

const controller = {};


controller.addTicket = async (req, res, next) => {
    const { body } = req;
    console.log('just the body', body);
  try {
    const ticket = await Ticket.create(body)
    console.log('IS A TICKET', ticket);
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

controller.grabTicket = async (req, res, next) => {
    const { name } = req.params;
  try {
    const ticket = await Ticket.findOneAndUpdate({name: name}, {helpStatus: true})
    console.log(ticket);
    return next();

  } catch (err) {
    return next({
        log: 'ERROR: controller.grabTicket',
        message: err
      })
  }
}

module.exports = controller;