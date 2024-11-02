TODOs

- All controls needing to support validation rules need to handle setValidate so it's reset back to false once triggered.
- Update Password component to check password strength (can be done with validator.js)
- Update Select component to support OptGroup
- Update all control components to support onClick as an optional event
- Update all control components to have the aria-describedby based on the helpMessage (maybe)
- Standardise the naming convention on the Form Provider and Content rendered as part of validation (e.g. validationMessages.required ?? content.isRequired)
- Fix the paths so they are either all absolute or relative
- Embed a compiler in here to manage building the package for dist consumption
- Following Control Components are still needed
  - Date Picker
  - Date of Birth
  - Radio Group
  - Slider/Progress Bar (maybe?)
- If possible, get a branching policy embedded
- Simplify the Checkbox Group state object to follow a similar pattern to Radio Group state and options properties
- Custom icons are stored in SVG files but handled as React Commponent so any documentation will need to state SVGR or similar may be needed
