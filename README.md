[![Build Status](https://travis-ci.org/anupvarghese/redux-loader-middleware.svg?branch=master)](https://travis-ci.org/anupvarghese/redux-loader-middleware)

## Loader middleware for redux

A simple middleware for handling notifications using redux store

#### How to use

- install package `yarn add redux-loader-middleware`

#### Steps to add middleware

- Add reducer

```
import { combineReducers } from 'redux';
import { loaderReducer } from 'redux-loader-middleware';

const reducer = combineReducers({
  // app reducers
  loader: loaderReducer,
});
```

- Keep list of actions to show notifications

```
import C from './constants';

const loaderShowEvents = [
  'LOGIN_REQ',
  'FETCH_PRODUCT_REQ',
  ...
];

const loaderHideEvents = [
  'LOGIN_FAILURE',
  'LOGIN_SUCCESS',
  'FETCH_PRODUCT_FAILURE',
  'FETCH_PRODUCT_SUCCESS',
  ...
];

export {
  loaderShowEvents,
  loaderHideEvents,
}
```

- Add middleware to store with events
```
import { createStore, applyMiddleware } from 'redux';
import { loaderMiddleware } from 'redux-loader-middleware';
import { loaderShowEvents, loaderHideEvents } from './loader_events';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(loaderMiddleware(loaderShowEvents, loaderHideEvents))
);
...
```

In the actions we can now supply loader ids for showing and hiding

For showing loader, additional `loaderMessage` can be supplied too.

For example, show loader as below,
```
{
  type: 'FETCH_PRODUCT_REQ',
  loaderId: '123',
  loaderMessage: 'fetching products',
}
```

Hide loader example,
```
{
  type: 'FETCH_PRODUCT_SUCCESS',
  loaderId: '123',
}
```

Loader states will be available in the redux store and can be consumed in any connected containers


PS: Multiple loader components should have unique ids
