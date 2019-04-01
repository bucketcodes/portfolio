import React from 'react'
import {Typography} from '@material-ui/core'


export default function Hero() {
  return (
    <section
          style={{
            height: "100vh",
            width: '100%',
            backgroundImage: "radial-gradient(#1e2c59, #0A0F1E) ",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <div style={{
            backgroundImage: 'url(https://images.ctfassets.net/idmfh0ehr6d7/3l7fIC4HD22s2iYWiE6Cam/4760a0ebeff1e72117657eba7e8546e3/pattern.png)',
            display: 'block',
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.03 + window.pageYOffset /5000,
            
            backgroundPosition: `0px -${window.pageYOffset /7}px `
          }}/>
          <svg viewBox="0 0 380 400" width="200" height="230" style={{zIndex: 2, marginTop: window.pageYOffset /2}}>
            <path id="path" />
          </svg>
          <Typography variant='h3' style={{color: 'white', zIndex: 2}}>
            Timothy Lentz
          </Typography>
          <Typography className='hand' variant='p' style={{color: 'white', zIndex: 2}}>
            Developer / Designer / Storyteller
          </Typography>
        </section>
  )
}
