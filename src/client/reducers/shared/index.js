/*
 *       .                             .o8                     oooo
 *    .o8                             "888                     `888
 *  .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
 *    888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
 *    888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
 *    888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
 *    "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 *  ========================================================================
 *  Author:     Chris Brame
 *  Updated:    1/20/19 4:46 PM
 *  Copyright (c) 2014-2019. All rights reserved.
 */

import { handleActions } from 'redux-actions'
import { fromJS, List, Map } from 'immutable'

import { SET_SESSION_USER, FETCH_ROLES, UPDATE_ROLE_ORDER, SHOW_NOTICE, CLEAR_NOTICE } from 'actions/types'

const initialState = {
  sessionUser: null,
  roles: List([]),
  roleOrder: Map({}),
  notice: null,
  loadingViewData: true,
  viewdata: Map({})
}

const sharedReducer = handleActions(
  {
    [SET_SESSION_USER]: (state, action) => {
      return {
        ...state,
        sessionUser: action.payload.sessionUser
      }
    },

    [SHOW_NOTICE]: (state, action) => {
      return {
        ...state,
        notice: fromJS(action.payload)
      }
    },

    [CLEAR_NOTICE]: state => {
      return {
        ...state,
        notice: null
      }
    },

    [FETCH_ROLES.SUCCESS]: (state, action) => {
      return {
        ...state,
        roles: fromJS(action.response.roles),
        roleOrder: fromJS(action.response.roleOrder)
      }
    },

    [UPDATE_ROLE_ORDER.SUCCESS]: (state, action) => {
      return {
        ...state,
        roleOrder: fromJS(action.response.roleOrder)
      }
    }
  },
  initialState
)

export default sharedReducer
