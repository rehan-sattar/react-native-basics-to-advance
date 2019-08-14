import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const COLOR_INCREMENT = 15;

/**
 * @colorReducer
 * @desc : reducer function for handling colors state
 * @args : (state -> Type: ANY, action -> type: OBJECT of shape { type: value: Any, paylaod: Any}, ...rest)
 * @return : any valid value.
 */
const colorReducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {
            ...state,
            red: state.red + action.payload
          };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {
            ...state,
            green: state.green + action.payload
          };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {
            ...state,
            blue: state.blue + action.payload
          };
    default:
      return state;
  }
};

const ColorMakerScreen = () => {
  /**
   * @useReducer
   * @desc   : hook for  working with reducer functions.
   * @args   : (reducer -> type: FUNCTION, INITIAL_STATE -> type: ANY, ...rest)
   * @return : it will always return any valid value, value -> type: ANY
   */
  const [state, dispatch] = useReducer(colorReducer, {
    red: 0,
    green: 0,
    blue: 0
  });
  const { red, green, blue } = state;

  return (
    <View>
      <Text>Color Maker screen</Text>
      <ColorAdjuster
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
        color="red"
      />
      <ColorAdjuster
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
        color="green"
      />
      <ColorAdjuster
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
        color="blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

export default ColorMakerScreen;
