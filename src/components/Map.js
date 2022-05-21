import React from 'react'
import { GMap } from 'react-rainbow-components'

const styles = {
  maxWidth: 400,
  margin: 'auto'
}

const MyMap = () => {
  return (
    <div>
      <div
        className="rainbow-p-vertical_x-large rainbow-p-horizontal_small"
        style={styles}
      >
        <GMap
          apiKey={process.env.REACT_APP_API_KEY}
          zoom={10}
          latitude={39.742043}
          longitude={-104.991531}
          header="Denver, my home"
        >
          {/* <MapMarker
            latitude={39.742043}
            longitude={-104.991531}
            label="Denver"
            description=" Denver, Colorado, USA"
          /> */}
        </GMap>
      </div>
    </div>
  )
}

export default MyMap
