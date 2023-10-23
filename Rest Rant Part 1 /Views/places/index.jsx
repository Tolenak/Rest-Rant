const React = require('react')
const Def = require('./default')


function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>
            <a href= {`/places/${place.id}`}>
            {place.name}
            </a> 
            </h2>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Def>
    )
  }
  
  
function places () {

return (
    <html>
        <head>
            <title>Title</title>
        </head>
        <body>
            {html.children}
        </body>
    </html>
)
}

module.exports = places