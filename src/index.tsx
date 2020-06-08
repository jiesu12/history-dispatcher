import * as H from 'history'
import * as React from 'react'
import {withRouter} from 'react-router-dom'

interface Props {
  location: H.Location
}

/**
 * Fires a load event whenever history location changes.
 * IFrame load event only fires when click a html href link.
 * React Router changes won't trigger a load event in IFrame.
 * Fileswim parent window listens to iframe load event to
 * update the browser url.
 */
const HistoryDispatcher = ({ location }: Props) => {
  React.useEffect(() => {
    window.frameElement.dispatchEvent(new Event('load'))
  }, [location.key])
  return <div className='history-dispatcher' />
}

export default withRouter(HistoryDispatcher)
