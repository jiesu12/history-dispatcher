# HistoryDispatcher
Use this in a Frame to fire a load event when URL is changed by React Router.

Example:
```
ReactDOM.render(
    <Provider store={configureStore()}>
      <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/help' component={Help} />
        </Switch>
        <HistoryDispatcher />
      </Router>
    </Provider>,
    document.getElementById('root'),
  )
```
