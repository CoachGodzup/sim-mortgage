import { Subject } from "rxjs";
import Player from "../models/player";

const playerStore = new Subject<Player[]>();

export const playerStore$ = playerStore.asObservable();

export type ACTION_PLAYER = 'ADD_PLAYER' | 'UPDATE_PLAYER' | 'REMOVE_PLAYER'

export interface PlayerAction {
    type: ACTION_PLAYER;
    payload?: Record<string, any>;
}

export interface PlayerAddAction {
    type: 'ADD_PLAYER',
    payload: {
        player: Player
    }
}

export interface PlayerUpdateAction {
    type: 'UPDATE_PLAYER',
    payload: {
        player: Player
    }
}

export interface PlayerRemoveAction {
    type: 'REMOVE_PLAYER',
    payload: {
        id: string;
    }
}

export const playerReducer = (state: Player[] = [], action: ACTION) => {
    switch(action.type) {
        case 'ADD_PLAYER':
            return [...state, (action as PlayerAddAction).payload.player ]
        case 'UPDATE_PLAYER':
                return state.map(player => {
                    const act =  (action as PlayerUpdateAction);
                    return player.id === act.payload.player.id ? act.payload.player : player;
                });
        case 'REMOVE_PLAYER': 
            return state.filter(player => player.id !== (action as PlayerRemoveAction).payload.id);
        default: 
            return state;
    }
}
