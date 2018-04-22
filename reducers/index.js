import { combineReducers } from 'redux';

import {
  CLEAR_DECKS,
  PACKS_AVAILABLE,
  DECK_AVAILABLE,
  SET_IN_COLLECTION,
  SET_PACK_SPOILER,
  NEW_CAMPAIGN,
  ADD_CAMPAIGN_MISSION_RESULT,
} from '../actions/';

const DEFAULT_PACKS_STATE = {
  all: [],
  in_collection: {},
  show_spoilers: {},
  loading: true,
};

const packs = (state = DEFAULT_PACKS_STATE, action) => {
  if (action.type === PACKS_AVAILABLE) {
    return Object.assign({},
      state,
      {
        all: action.packs,
        loading: false,
      });
  } else if (action.type === SET_IN_COLLECTION) {
    const new_collection = Object.assign({}, state.in_collection);
    if (action.value) {
      new_collection[action.code] = true;
    } else {
      delete new_collection[action.code];
    }
    return Object.assign({},
      state,
      {
        in_collection: new_collection,
      },
    );
  } else if (action.type === SET_PACK_SPOILER) {
    const new_spoilers = Object.assign({}, state.show_spoilers);
    if (action.value) {
      new_spoilers[action.code] = true;
    } else {
      delete new_spoilers[action.code];
    }
    return Object.assign({},
      state,
      {
        show_spoilers: new_spoilers,
      },
    );
  }
  return state;
};

const DEFAULT_DECK_STATE = { all: {} };

const decks = (state = DEFAULT_DECK_STATE, action) => {
  if (action.type === DECK_AVAILABLE) {
    return Object.assign({},
      state,
      {
        all: Object.assign(
          {},
          state.all,
          { [action.id]: action.deck },
        ),
      });
  } else if (action.type === CLEAR_DECKS) {
    return DEFAULT_DECK_STATE;
  }
  return state;
};


// Campaign: {
//   id: '',
//   name: '',
//   lastUpdated: Date,
//   missionResults: [{
//     deckIds: [], who participated in mission
//     mission: '',
//     campaignNotes: [],
//     mentalTrauma: {}, keyed by investigator.code
//     physicalTrauma: {}, keyed by investigator.code
//   }],
// }
const DEFAULT_CAMPAIGNS_STATE = {
  all: {},
};
const campaigns = (state = DEFAULT_CAMPAIGNS_STATE, action) => {
  if (action.type === NEW_CAMPAIGN) {
    const newCampaign = {
      id: action.id,
      name: action.name,
      lastUpdated: action.now,
      missionResults: [],
    };
    return Object.assign({},
      state,
      { all: Object.assign({}, state.all, { [action.id]: newCampaign }) },
    );
  } else if (action.type === ADD_CAMPAIGN_MISSION_RESULT) {
    const campaign = state.all[action.id];
    const missionResults = [
      ...campaign.missionResults,
      Object.assign({}, action.missionResult),
    ];
    const updatedCampaign = Object.assign(
      {},
      campaign,
      { missionResults, lastModified: action.now },
    );
    return Object.assign({},
      state,
      { all: Object.assign({}, state.all, { [action.id]: updatedCampaign }) },
    );
  }
  return state;
};

// Combine all the reducers
const rootReducer = combineReducers({
  packs,
  decks,
  campaigns,
});

export default rootReducer;
