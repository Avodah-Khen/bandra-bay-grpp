//validates every incoming request against each site id before proceeding to the database etc
//middleware is a function that has access to the request and response objects
//backend/middleware/validateSite.js

// const sites = require('../config/sites')

// module.exports = (req, res, next) => {
//   const siteId = req.body.siteId || req.query.siteId || req.headers['x-site-id']

//   if (!siteId || !sites[siteId]) {
//     return res.status(400).json({ error: 'Invalid or missing siteId' })
//   }

//   req.site = sites[siteId]   // attach site config to request
//   req.siteId = siteId
//   next()
// }