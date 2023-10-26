const React = require('react')
const Def = require('../default')

function new_form (data) {
  let message = ''                 
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            {message}                 
            ...
          </main>
        </Def>
    )
}

module.exports = new_form


