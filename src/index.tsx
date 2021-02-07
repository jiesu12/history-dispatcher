import * as H from 'history'
import * as React from 'react'
import { withRouter } from 'react-router-dom'

/**
 * Fires a load event whenever history location changes.
 * IFrame load event only fires when click a html href link.
 * React Router changes won't trigger a load event in IFrame.
 * Fileswim parent window listens to iframe load event to
 * update the browser url.
 */
const HistoryDispatcher: React.ComponentClass = withRouter(({ location }: {location: H.Location}) => {
  React.useEffect(() => {
    if (window.frameElement) {
      window.frameElement.dispatchEvent(new Event('load'))
    }
  }, [location.key])
  return <div className='history-dispatcher' />
})

export default HistoryDispatcher
