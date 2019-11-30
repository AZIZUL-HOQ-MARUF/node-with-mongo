module.exports = {
    showAllEvents: (req, res) => {
        //create dummy event data
        const events = [
            { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' },
            { name: 'Swimming', slug: 'swimming', description: 'Michael Phelps is the fast fish.' },
            { name: 'Weightlifting', slug: 'weightlift', description: 'Lifting heavy things up' },
            { name: 'Ping Pong', slug: 'pingpong', description: 'Super fast paddles' }
        ];
        res.render('pages/events', { events: events });

    },
    showSingle: (req, res) => {
        const event = { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' }
        res.render('pages/single', { event: event })
    }

}