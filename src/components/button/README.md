## API

### Button props

| Property    | Description                                        | Type    | Accepted Values                          | Default  |
| :---------- | :------------------------------------------------- | :------ | :--------------------------------------- | :------- |
| type        | the type of button                                 | String  | `primary`, `secondary`, `link`, `danger` | -        |
| size        | the size of button                                 | String  | `x-large`/`large`/`normal`/`small`       | `normal` |
| outline     | whether the button is an outline button            | Boolean | -                                        | `false`  |
| frameless   | whether the button is a frameless button           | Boolean | -                                        | `false`  |
| dashed      | whether the button is a dashed button              | Boolean | -                                        | `false`  |
| ghost       | whether the button is a ghost button               | Boolean | -                                        | `false`  |
| full-width  | whether the button is a full-width button          | Boolean | -                                        | `false`  |
| compact     | whether the button is a compact button             | Boolean | -                                        | `false`  |
| round       | whether the button is a round button               | Boolean | -                                        | `false`  |
| circle      | whether the button is a circle button              | Boolean | -                                        | `false`  |
| rich        | whether the button is a rich-content button        | Boolean | -                                        | `false`  |
| icon        | button icon, accepts svg                           | String  | -                                        | -        |
| suffix-icon | button suffix icon, accepts svg                    | String  | -                                        | -        |
| loading     | whether it is loading                              | Boolean | -                                        | `false`  |
| href        | render button as the HTMLElement a label           | String  | -                                        | -        |
| target      | only works href support, the attr of HTMLElement a | String  | -                                        | -        |

### Button events

| Event | Description               | Parameters   |
| :---- | :------------------------ | :----------- |
| click | the click event of button | Event Object |
