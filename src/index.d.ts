declare module '@yevhenpashutin/react-native-slider' {
    import {ComponentClass, PureComponent, ReactNode} from 'react';

    import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

    /**
     * Callback for slider change events. The second number value will be only if provided an array with two values in `value` prop
     */
    type SliderOnChangeCallback = (value: [number, number]) => void;

    interface ISliderProps {
        /**
         *  Set to true if you want to use the default 'spring' animation.
         */
        animateTransitions?: boolean;
        /**
         * Used to configure the animation parameters. These are the same parameters in the [Animated library](https://facebook.github.io/react-native/docs/animations.html).
         */
        animationConfig?: object;
        /**
         * Set to 'spring' or 'timing' to use one of those two types of animations with the default [animation properties](https://facebook.github.io/react-native/docs/animations.html).
         */
        animationType?: 'spring' | 'timing';
        /**
         * The style applied to the container view around slider
         */
        containerStyle?: StyleProp<ViewStyle>;
        /**
         * Set this to true to visually see the thumb touch rect in green.
         */
        debugTouchArea?: boolean;
        /**
         * If true the user won't be able to move the slider
         */
        disabled?: boolean;
        /**
         * The color used for the track to the right of the button. Default: `#b3b3b3`
         */
        maximumTrackTintColor?: string;
        /**
         * Initial maximum value of the slider. Default: `1`
         */
        maximumValue?: number;
        /**
         * The color used for the track to the left of the button. Default: `#3f3f3f`
         */
        minimumTrackTintColor?: string;
        /**
         * Initial minimum value of the slider. Default: `0`
         */
        minimumValue?: number;
        /**
         * Callback called when the user finishes changing the value (e.g. when the slider is released)
         */
        onSlidingComplete?: SliderOnChangeCallback;
        /**
         * Callback called when the user starts changing the value (e.g. when the slider is pressed)
         */
        onSlidingStart?: SliderOnChangeCallback;
        /**
         * Callback continuously called while the user is dragging the slider
         */
        onValueChange?: SliderOnChangeCallback;
        /**
         * Function which returns a custom Component of your liking to be rendered above the thumb and accepts an index of a thumb starting from 0.
         */
        renderAboveThumbComponent?: (index: number) => ReactNode;
        /**
         * Function which returns a custom Component of your liking to be rendered within the thumb.
         */
        renderThumbComponent?: () => ReactNode;
        /**
         * Function which returns a custom Component of your liking to be rendered on top of the slider truck at the values provided by `trackMarks` property. It accepts an index of a mark from `trackMarks` array the method is being executed for.
         */
        renderTrackMarkComponent?: (index: number) => ReactNode;
        /**
         * Step value of the slider. The value should be between 0 and maximumValue - minimumValue)
         */
        step?: number;
        /**
         * Sets an image for the thumb
         */
        thumbImage?: ImageSourcePropType;
        /**
         * The style applied to the thumb
         */
        thumbStyle?: StyleProp<ViewStyle>;
        /**
         * The color used for the thumb. Default: `#343434`
         */
        thumbTintColor?: string;
        /**
         * The size of the touch area that allows moving the thumb. The touch area has the same center as the visible thumb. This allows to have a visually small thumb while still allowing the user to move it easily.
         * Default: `{width: 40, height: 40}`
         */
        thumbTouchSize?: {width: number; height: number};
        /**
         * If true the user will be able to click anywhere on the track to set the value to that position.
         * Default: `true`
         */
        trackClickable?: boolean;
        /**
         * The value should be an array of numbers between minimumValue and maximumValue. In order to render a mark on top of the slider track at provided numbers `renderTrackMark` property should also be provided
         */
        trackMarks?: Array<number>;
        /**
         * The style applied to the track line
         */
        trackStyle?: StyleProp<ViewStyle>;
        /**
         * Initial value of the slider. The value should be a number or array of numbers between minimumValue and maximumValue, which default to `0` and `1` respectively. Default value is `0`. This is not a controlled component, e.g. if you don't update the value, the component won't be reset to its inital value.
         */
        value?: number | number[];
    }

    export class Slider extends PureComponent<ISliderProps> {}
}
