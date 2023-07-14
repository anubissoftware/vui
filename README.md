# Anubis Vui for Vue3

This package contain different awesome components for Vue3 

 To do this, use `npm` to get the latest version of Anubis Vui:
 ```
   npm install anubisapps-vui
 ```

## VuiButton

Use `VuiButton's` component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, colors, and more.

```
   <VuiButton outlined>
      My Button
   </VuiButton>
```
   ### Properties
   
   * **Size**:  Fancy larger or smaller buttons? Specify `lg` or `sm` via the size prop.
   * **Color**:  Specify color in input with de dafult Colors (`primary`, `success`, `danger`, `warning`) via the color prop.
   * **Shadow**:  More shadow in your button? Specify `xl`,`lg`, `md` or`sm` via the shadow prop.

   ### Variations
   - `outlined`
## VuiInput

Use `VuiInput's` component for inputs. Includes support for a handful of contextual variations, sizes, types, and more.

```
   <VuiInput 
      v-model="myValue"
      label="Some Input"
      outlined size="sm" 
      placeholder="Write.." 
   />
```
   ### Properties
   
   * **Size**:  Fancy larger or smaller inputs? Specify `lg` or `sm` via the size prop.
   * **readonly**:  Specify readonly in input.
   * **Hint**:  Specify hint under of input.
   * **Required**:  Specify if input is required.
   * **placeholder**:  specify  via placeholder prop.
   * **label**:  specify  via placeholder prop.

   ### Variations
   - `outlined`
