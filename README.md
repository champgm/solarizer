# solarizer
A utility which contains the default hexadecimal and RGB values for [Solarized](https://ethanschoonover.com/solarized/) color values as well as the ability to convert colors into a solarized-style theme by mimicking the color differences found in the "Base" colors.

## Installation
`npm install --save solarizer`

## Usage
Here's an example of how one might create some solarized [react-native-really-awesome-button](https://github.com/rcaferati/react-native-really-awesome-button)s.

```Typescript
import { createBasesFromColor, rgb, rgbStrings as bases } from "solarizer";

const blue = createBasesFromColor(rgb.blue, "base01");
const red = createBasesFromColor(rgb.red, "base01");
const green = createBasesFromColor(rgb.green, "base01");
```
Then later...
```tsx
  render() {
    return (
      <View style={styles.root} >
        <AwesomeButton
          key="Clear Button"
          onPress={() => this.clear()}
          backgroundColor={this.state.busy ? bases.base01 : red.base01}
          backgroundActive={this.state.busy ? bases.base02 : red.base02}
          backgroundDarker={this.state.busy ? bases.base03 : red.base03}
          disabled={this.state.busy}
        >
          Clear
        </AwesomeButton>
        <AwesomeButton
          key="Submit Button"
          onPress={() => this.submit()}
          accessibilityLabel="Submit"
          backgroundColor={this.state.busy ? bases.base01 : green.base01}
          backgroundActive={this.state.busy ? bases.base02 : green.base02}
          backgroundDarker={this.state.busy ? bases.base03 : green.base03}
          disabled={this.state.busy}
        >
          Submit
        </AwesomeButton>
      </View >);
  }
}

```
The result will look something like this:

![solarized buttons](https://github.com/champgm/solarizer/raw/master/buttons.png)


## Details
Using an initial color and the known RGB differences between "Base" colors in the Solarized theme:

![solarized base colors](https://github.com/champgm/solarizer/raw/master/solarized.png)

We can choose a point in the Base range to use the initial color and then calculate Solarized-esque values for other Base values.

This is a very naive approach (see [Color Difference](https://en.wikipedia.org/wiki/Color_difference)) but it seems to work pretty well for coloring UI buttons, etc.

