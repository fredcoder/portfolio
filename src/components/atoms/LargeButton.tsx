import React from 'react'

type LargeButtonPropTypes = {
  url: string
}

const LargeButton = ({ url }: LargeButtonPropTypes) => {
  return (
    <div className="large-button-box">
      <button
        className="gradient-button"
        onClick={() => (window.location.href = url)}
      >
        See Live
      </button>
    </div>
  )
}

export default LargeButton
