const express = require('express')
const Pool = require('pg').Pool

const connection = new Pool({
    user: 'owner',
    host: 'localhost',
    database: 'backend',
    password: '123456',
    port: 5432,
  })

  connection.connect( (error) => {
    if(error) throw error
  })

  module.exports = connection;