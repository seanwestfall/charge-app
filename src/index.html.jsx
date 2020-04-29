import About from './pages/about.html.mdx'

export default () => {
  return (
    <html>
    <head>
      <title>Monday Morning Surf Club</title>

      <link href="/stylesheets/index.css" rel="stylesheet" media="all" />
      
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </head>
    <body>
      <main style={{textAlign: 'center'}}>
        <h1>Monday Morning Surf Club!</h1>
        <img style={{maxWidth: '300px'}} src="https://raw.githubusercontent.com/seanwestfall/mmsc/master/img/69e8f9e0475077548bc5830d1cbea1ee.jpg" alt="Surf" />
        <About />
      </main>
    </body>
    </html>
  )
}
